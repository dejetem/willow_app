import "reflect-metadata";
import * as dotenv from "dotenv";
import { AppDataSource } from "./config/Database";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });