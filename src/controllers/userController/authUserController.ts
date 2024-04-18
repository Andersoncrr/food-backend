import { userService } from '@/services/userService';
import { NextFunction, Request, Response } from 'express';

export const authUserController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { email, password }: { email: string; password: string } =
            req.body;

        const token = await userService.authUserService(email, password);

        res.status(200).json({
            token,
        });
    } catch (error) {
        next(error);
    }
};
