import { createEmployeeController } from './createEmployeeController';
import { getEmployeesByIdUserController } from './getEmployeesByIdUserController';
import { deleteEmployeeByIdController } from './deleteEmployeeByIdController';
import { updateEmployeeByIdController } from './updateEmployeeByIdController';

export const employeeController = {
    createEmployeeController,
    getEmployeesByIdUserController,
    deleteEmployeeByIdController,
    updateEmployeeByIdController,
};
