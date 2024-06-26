import { MenuProductService } from '@/services/menuProductService';
import { NextFunction, Request, Response } from 'express';

export const updateMenuProductByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { name, description, category, price } = req.body;
    const { idMenuProduct } = req.params;
    try {
        const menuProduct =
            await MenuProductService.updateMenuProductByIdService(
                {
                    name,
                    description,
                    category,
                    price,
                },
                idMenuProduct,
            );

        res.status(200).json(menuProduct);
    } catch (error) {
        next(error);
    }
};
