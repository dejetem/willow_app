import { Router } from 'express';
import { ChatController } from '../controllers/ChatController';
import { ErrorHandler } from '../middlewares/ErrorHandler';

const chatController = new ChatController();
const router = Router();

router.post('/', ErrorHandler.catchErrors(chatController.chatWithBot));

export default router;