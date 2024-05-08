import { MenuProductService } from '@/services/menuProductService';
import { NextFunction, Request, Response } from 'express';

export const getMenuProductsByIdUserController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { idUser } = req.params;
        const allMenuProducts =
            await MenuProductService.getMenuProductsByIdUserService(idUser);
        res.status(200).json(allMenuProducts);
    } catch (error) {
        next(error);
    }
};
