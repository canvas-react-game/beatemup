import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Topic } from "./forum/models/topic";
import { Theme } from "./themes/models/themes";

const dbName = "dungeonCrawler";
const username = "postgres";
const password = "242090";
const host = "localhost";
const port = 5432;

export const createSequelize = (): Sequelize => {
    const sequelizeOptions: SequelizeOptions = {
        host,
        port,
        username,
        password,
        database: dbName,
        dialect: "postgres",
    };

    const db = new Sequelize(sequelizeOptions);
    db.addModels([Topic, Theme]);

    return db;
};
