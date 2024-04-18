import { menuCategoryService } from '@/services/menuCategoryService';
import { NextFunction, Request, Response } from 'express';

export const updateMenuCategoryController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { name, description, idUser } = req.body;
    const { idMenuCategory } = req.params;
    try {
        const menuCategory =
            await menuCategoryService.updateMenuCategoryService(
                idMenuCategory,
                {
                    name,
                    description,
                    idUser,
                },
            );

        res.status(200).json(menuCategory);
    } catch (error) {
        next(error);
    }
};
