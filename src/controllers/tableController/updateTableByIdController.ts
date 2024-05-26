import { tableService } from '@/services/tableService';
import { NextFunction, Request, Response } from 'express';

export const updateTableByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idTable, number, capacity, x, y } = req.body;
    try {
        const table = await tableService.updateTableByIdService({
            idTable,
            number,
            capacity,
            x,
            y,
        });
        res.status(200).json(table);
    } catch (error) {
        next(error);
    }
};
