import { toppingCategoryService } from '@/services/toppingCategoryService';
import { NextFunction, Request, Response } from 'express';

export const updateToppingCategoryController = async (
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

    const { idToppingCategory } = req.params;
    try {
        const menuCategory =
            await toppingCategoryService.updateToppingCategoryService(
                idToppingCategory,
                {
                    idUser,
                    name,
                    description,
                    minToppingsForCategory,
                    maxToppingsForCategory,
                },
            );

        res.status(200).json(menuCategory);
    } catch (error) {
        next(error);
    }
};
