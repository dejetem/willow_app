import express, { Express, Request, Response } from "express";
import cors from 'cors';
import chatRoutes from './routes/ChatRoutes';
import ideaRoutes from './routes/IdeaRoutes';
import { ErrorHandler } from "./middlewares/ErrorHandler";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoutes);
app.use('/api/ideas', ideaRoutes);

app.use("*", (req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: "Invalid route",
    });
});

app.use(ErrorHandler.handleErrors);

export default app;