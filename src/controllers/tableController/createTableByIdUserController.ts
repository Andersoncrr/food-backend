import { tableService } from '@/services/tableService';
import { NextFunction, Request, Response } from 'express';

export const createTableByIdUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idUser, number, capacity } = req.body;
    try {
        const table = await tableService.createTableByIdUserService({
            idUser,
            number,
            capacity,
        });

        res.status(200).json(table);
    } catch (error) {
        next(error);
    }
};
