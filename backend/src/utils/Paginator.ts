import { Request } from 'express';

interface PaginationInfo {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    pages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}

export interface IdeaObject<T> {
    [key: string]: T;
}


export class Paginator {
    static async paginate(queryBuilder: IdeaObject<any>, req: Request) {

        let page = Number(req.query.page) || 1;
        let pageSize = Number(req.query.pageSize) || 10;
        const offset = (page - 1) * pageSize;

        // Add DESC order by `createdAt` column
        const records = await queryBuilder
            .orderBy('createdAt', 'DESC')  // Specify the column and order direction
            .skip(offset)
            .take(pageSize)
            .getMany();
        const totalItems = await queryBuilder.getCount();

        const pages = Math.ceil(totalItems / pageSize);
        const currentPage = offset / pageSize + 1;
        const hasNext = currentPage < pages;
        const hasPrevious = currentPage > 1;

        const paginationInfo: PaginationInfo = {
            currentPage: page,
            pageSize: pageSize,
            totalItems,
            pages,
            hasNext,
            hasPrevious,
        };
        return { records, paginationInfo };
    }
}