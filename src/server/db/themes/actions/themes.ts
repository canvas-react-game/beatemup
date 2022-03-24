import { Theme } from "../models/themes";

export const getDBTheme = (id: number): Promise<any> => Theme.findOne({ where: { user_id: id } });

export const updateDBTheme = (id: number, body: any): Promise<any> => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const data = {
        theme: body.theme,
        user_id: id,
    };
    return Theme.update(data, { where: { user_id: id } });
};

export const addDBTheme = (body: any): Promise<any> => Theme.create(body);
