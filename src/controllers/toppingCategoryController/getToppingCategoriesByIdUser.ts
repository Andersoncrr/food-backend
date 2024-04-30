import { menuCategoryService } from '@/services/menuCategoryService';
import { toppingCategoryService } from '@/services/toppingCategoryService';
import { NextFunction, Request, Response } from 'express';

export const getToppingCategoriesByIdUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idUser } = req.params;
    try {
        const toppingCategories =
            await toppingCategoryService.getToppingCategoriesByIdUserService(
                idUser,
            );

        res.status(200).json(toppingCategories);
    } catch (error) {
        next(error);
    }
};
