import { Request, Response } from "express";
import { ValidationError } from "sequelize";
import { updateDBTheme, getDBTheme } from "@/server/db/themes/actions/themes";
import { createSafeDecorator } from "@/server/utils/safeDecorator";
import { HttpStatuses } from "@/server/utils/httpStatuses";

const themeErrorHandler = (err: unknown, res: Response) => {
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
        return res.status(HttpStatuses.OK).send(theme);
    }

    @Safe
    async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const resultArray = await updateDBTheme(id, req.body);
        const result = resultArray[0];
        if (!result) {
            return res.status(HttpStatuses.BadRequest).send({ message: "Ошибка изменения темы" });
        }
        const theme = await getDBTheme(id);
        return res.status(HttpStatuses.OK).send(theme);
    }
}

export default new ThemeController();
