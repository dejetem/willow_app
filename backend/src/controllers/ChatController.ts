import { Request, Response } from 'express';
import { ChatbotResponse } from '../services/ChatbotService';
import { ResponseUtil } from "../utils/Response";

export class ChatController {
    async chatWithBot(req: Request, res: Response): Promise<Response> {
        const { message } = req.body;
        const response = await ChatbotResponse.getChatbotResponse(message);
        return ResponseUtil.sendSuccess(res, "Bot response successfully", response);
    }
}