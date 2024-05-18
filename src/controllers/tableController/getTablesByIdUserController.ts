import { tableService } from '@/services/tableService';
import { NextFunction, Request, Response } from 'express';

export const getTablesByIdUserController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { idUser } = req.params;

        const allTables = await tableService.getTablesByIdUserService(idUser);

        res.status(200).json(allTables);
    } catch (error) {
        next(error);
    }
};
