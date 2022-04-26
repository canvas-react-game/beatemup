import { Request, Response } from "express";
import { ValidationError } from "sequelize";
import { updateDBTheme, getDBTheme, addDBTheme } from "@/server/db/themes/actions/themes";
import { createSafeDecorator } from "@/server/utils/safeDecorator";
import { HttpStatuses } from "@/server/utils/httpStatuses";

const themeErrorHandler = (err: unknown, res: Response) => {
    console.log(err);
    if (err instanceof ValidationError) {
        return res.status(HttpStatuses.BadRequest).send({ message: "Неверный формат данных" });
    }
    return res.status(HttpStatuses.ServerError).send({ message: "Ошибка сервера" });
};

const Safe = createSafeDecorator(themeErrorHandler);

class ThemeController {
    @Safe
    async get(req: Request, res: Response) {
        const id = Number(req.params.id);
        const theme = await getDBTheme(id);
        if (!theme) {
            // Если нет, то создаем
            const newTheme = await addDBTheme({
                user_id: id,
                theme: "light",
            });
            if (!newTheme) {
                return res.status(HttpStatuses.BadRequest).send(
                    { message: "Ошибка сохранения темы" },
                );
            }
            return res.status(HttpStatuses.OK).send(newTheme);
        }
        return res.status(HttpStatuses.OK).send(theme);
    }

    @Safe
    async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        // Сначала проверяем существует ли такой юзер
        const theme = await getDBTheme(id);
        if (!theme) {
            // Если нет, то создаем
            const newTheme = await addDBTheme({
                user_id: id,
                theme: req.body,
            });
            if (!newTheme) {
                return res.status(HttpStatuses.BadRequest).send(
                    { message: "Ошибка сохранения темы" },
                );
            }
            return res.status(HttpStatuses.OK).send(newTheme);
        }
        // Если есть, то обновляем
        const resultArray = await updateDBTheme(id, req.body);

        const result = resultArray[0];
        if (!result) {
            return res.status(HttpStatuses.BadRequest).send({ message: "Ошибка изменения темы" });
        }

        // Возвращаем обновленную тему
        const updatedTheme = await getDBTheme(id);
        return res.status(HttpStatuses.OK).send(updatedTheme);
    }

    @Safe
    async add(req: Request, res: Response) {
        const currentTheme = await addDBTheme(req.body);

        if (!currentTheme) {
            return res.status(HttpStatuses.BadRequest).send({ message: "Ошибка сохранения темы" });
        }
        return res.status(HttpStatuses.OK).send(currentTheme);
    }
}

export default new ThemeController();
