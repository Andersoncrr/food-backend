import { menuCategoryService } from '@/services/menuCategoryService';
import { NextFunction, Request, Response } from 'express';

export const deleteMenuCategoryController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idMenuCategory } = req.params;
    try {
        const menuCategory =
            await menuCategoryService.deleteMenuCategoryService(idMenuCategory);

        res.status(200).json(menuCategory);
    } catch (error) {
        next(error);
    }
};
