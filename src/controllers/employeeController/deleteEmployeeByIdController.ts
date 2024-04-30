import { employeeService } from '@/services/employeeService';
import { NextFunction, Request, Response } from 'express';

export const deleteEmployeeByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { idEmployee } = req.params;
    try {
        const employee =
            await employeeService.deleteEmployeeByIdService(idEmployee);
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};
