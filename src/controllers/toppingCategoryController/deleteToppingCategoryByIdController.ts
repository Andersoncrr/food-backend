import { toppingCategoryService } from '@/services/toppingCategoryService';
import { NextFunction, Request, Response } from 'express';

export const deleteToppingCategoryByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idToppingCategory } = req.params;
    try {
        const toppingCategory =
            await toppingCategoryService.deleteMenuCategoryByIdService(
                idToppingCategory,
            );

        res.status(200).json(toppingCategory);
    } catch (error) {
        next(error);
    }
};
