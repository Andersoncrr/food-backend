import { MenuProductService } from '@/services/menuProductService';
import { NextFunction, Request, Response } from 'express';

export const createMenuProductController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { name, description, category, price, idUser } = req.body;
    const files = req.files;
    try {
        const menuProduct = await MenuProductService.createMenuProductService(
            {
                name,
                description,
                category,
                price,
                idUser,
            },
            files,
        );
        res.status(200).json(menuProduct);
    } catch (error) {
        next(error);
    }
};
