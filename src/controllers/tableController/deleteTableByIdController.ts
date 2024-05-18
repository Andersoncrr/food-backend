import { tableService } from '@/services/tableService';
import { NextFunction, Request, Response } from 'express';

export const deleteTableByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idTable } = req.params;
    try {
        const table = await tableService.deleteTableByIdService(idTable);

        res.status(200).json(table);
    } catch (error) {
        next(error);
    }
};
