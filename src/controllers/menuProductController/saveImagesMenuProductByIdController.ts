import { MenuProductService } from '@/services/menuProductService';
import { NextFunction, Request, Response } from 'express';

export const saveImagesMenuProductByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idMenuProduct } = req.params;
    try {
        const menuProduct =
            await MenuProductService.saveImagesMenuProductByIdService(
                idMenuProduct,
                req.files,
            );

        res.status(200).json(menuProduct);
    } catch (error) {
        next(error);
    }
};
