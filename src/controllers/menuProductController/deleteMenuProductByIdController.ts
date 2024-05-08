import { MenuProductService } from '@/services/menuProductService';
import { NextFunction, Request, Response } from 'express';

export const deleteMenuProducByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idMenuProduct } = req.params;
    try {
        const menuProduct =
            await MenuProductService.deleteMenuProductByIdService(
                idMenuProduct,
            );

        res.status(200).json(menuProduct);
    } catch (error) {
        next(error);
    }
};
