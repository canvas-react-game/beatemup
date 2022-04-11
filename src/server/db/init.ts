import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Topic } from "./forum/models/topic";
import { Theme } from "./themes/models/themes";

export const createSequelize = (): Sequelize => {
    const sequelizeOptions: SequelizeOptions = {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: "postgres",
    };

    const db = new Sequelize(sequelizeOptions);
    db.addModels([Topic, Theme]);

    return db;
};
