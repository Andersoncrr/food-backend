import { menuCategoryService } from '@/services/menuCategoryService';
import { NextFunction, Request, Response } from 'express';

export const getMenuCategoriesByIdUserController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idUser } = req.params;
    try {
        const menuCategory =
            await menuCategoryService.getMenuCategoriesByIdUserService(idUser);

        res.status(200).json(menuCategory);
    } catch (error) {
        next(error);
    }
};
