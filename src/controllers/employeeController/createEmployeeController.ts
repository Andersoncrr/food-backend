import { employeeService } from '@/services/employeeService';
import { NextFunction, Request, Response } from 'express';

export const createEmployeeController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { name, position, email, phone, idUser } = req.body;

        const employee = await employeeService.createEmployeeService({
            name,
            email,
            position,
            phone,
            idUser,
        });
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};
