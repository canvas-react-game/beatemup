import { Theme } from "../models/themes";

export const getDBTheme = (id: number): Promise<any> => Theme.findOne({ where: { id } });

export const updateDBTheme = (id: number, theme: any): Promise<any> => {
    const data = { theme } as any;
    return Theme.update(data, { where: { id } });
};
