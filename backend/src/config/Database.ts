import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Idea } from "../entities/Idea";

dotenv.config();


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Idea],
    synchronize: true,
    logging: false,
    subscribers: [],
    migrations: ["src/migrations/*.ts"],
});
