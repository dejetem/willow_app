import { Request, Response } from 'express';
import { AppDataSource } from '../config/Database';
import { Idea } from '../entities/Idea';
import { ResponseUtil } from '../utils/Response';
import { Paginator } from '../utils/Paginator';

const ideaRepository = AppDataSource.getRepository(Idea);

export class IdeaController {
    async saveIdea(req: Request, res: Response): Promise<Response> {
        const { content } = req.body;
        const idea = ideaRepository.create({ content });
        await ideaRepository.save(idea);
        return ResponseUtil.sendSuccess(res, "Idea Post successfully", idea, null, 201);
    }

    async getIdeas(req: Request, res: Response): Promise<Response> {
        const queryBuilder = ideaRepository.createQueryBuilder("idea");
        const { records: ideas, paginationInfo } = await Paginator.paginate(queryBuilder, req);
        const ideaData = ideas.map((idea: Idea) => {
            return idea
          });
        return ResponseUtil.sendSuccess(res, "Idea fetched successfully", ideaData, paginationInfo);
    }

    async resetIdeas(req: Request, res: Response): Promise<Response> {
        await ideaRepository.clear();
        return ResponseUtil.sendSuccess(res, "All ideas have been reset", null);
    }
}

