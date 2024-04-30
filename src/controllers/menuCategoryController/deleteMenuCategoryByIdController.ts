import { menuCategoryService } from '@/services/menuCategoryService';
import { NextFunction, Request, Response } from 'express';

export const deleteMenuCategoryByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idMenuCategory } = req.params;
    try {
        const menuCategory =
            await menuCategoryService.deleteMenuCategoryByIdService(
                idMenuCategory,
            );

        res.status(200).json(menuCategory);
    } catch (error) {
        next(error);
    }
};
