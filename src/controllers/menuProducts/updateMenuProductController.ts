import { MenuProductService } from '@/services/menuProductService';
import { NextFunction, Request, Response } from 'express';

export const updateMenuProductController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { name, description, category, price, idUser } = req.body;
    const { idMenuProduct } = req.params;
    try {
        const menuProduct = await MenuProductService.updateMenuProductService(
            {
                name,
                description,
                category,
                price,
                idUser,
            },
            idMenuProduct,
        );

        res.status(200).json(menuProduct);
    } catch (error) {
        next(error);
    }
};
