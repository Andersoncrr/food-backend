import { toppingCategoryService } from '@/services/toppingCategoryService';
import { userService } from '@/services/userService';
import { NextFunction, Request, Response } from 'express';

export const updateUserByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { name, lastName, email, password } = req.body;

    const { idUser } = req.params;
    try {
        const token = await userService.updateUserByIdService(idUser, {
            name,
            lastName,
            email,
            password,
        });

        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};
