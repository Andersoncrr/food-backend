import { createEmployeeController } from './createEmployeeController';
import { getAllEmployeesControllers } from './getAllEmployeesControllers';
import { deleteEmployeeController } from './deleteEmployeeController';
import { updateEmployeeController } from './updateEmployeeController';

export const employeeController = {
    createEmployeeController,
    getAllEmployeesControllers,
    deleteEmployeeController,
    updateEmployeeController,
};
