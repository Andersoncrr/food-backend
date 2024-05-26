import { employeeService } from '@/services/employeeService';
import { NextFunction, Request, Response } from 'express';

export const authEmployeeController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { email, password } = req.body;

        const token = await employeeService.authEmployeeService(
            email,
            password,
        );

        res.status(200).json({
            token,
        });
    } catch (error) {
        next(error);
    }
};
