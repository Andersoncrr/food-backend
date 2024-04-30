import { NextFunction, Request, Response } from 'express';
import { toppingCategoryService } from '@/services/toppingCategoryService';

export const createToppingCategoryController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const {
        idUser,
        name,
        description,
        minToppingsForCategory,
        maxToppingsForCategory,
    } = req.body;
    try {
        const toppingCategory =
            await toppingCategoryService.createToppingCategoryService({
                idUser,
                name,
                description,
                minToppingsForCategory,
                maxToppingsForCategory,
            });

        res.status(200).json(toppingCategory);
    } catch (error) {
        next(error);
    }
};
