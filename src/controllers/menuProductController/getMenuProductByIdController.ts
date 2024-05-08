import { MenuProductService } from '@/services/menuProductService';
import { NextFunction, Request, Response } from 'express';

export const getMenuProductByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { idMenuProduct } = req.params;
        const menuProduct =
            await MenuProductService.getMenuProductByIdService(idMenuProduct);

        res.status(200).json(menuProduct);
    } catch (error) {
        next(error);
    }
};
