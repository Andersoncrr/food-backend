import { employeeService } from '@/services/employeeService';
import { NextFunction, Request, Response } from 'express';

export const updateEmployeeController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { name, email, position, phone, idUser } = req.body;
    const { idEmployee } = req.params;
    try {
        const employee = await employeeService.updateEmployeeService(
            idEmployee,
            {
                name,
                email,
                position,
                phone,
                idUser,
            },
        );
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};
