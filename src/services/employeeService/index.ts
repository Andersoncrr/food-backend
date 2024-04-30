import { createEmployeeService } from './createEmployeeService';
import { getEmployeesByIdUserService } from './getEmployeesByIdUserService';
import { deleteEmployeeByIdService } from './deleteEmployeeByIdService';
import { updateEmployeeByIdService } from './updateEmployeeByIdService';

export const employeeService = {
    createEmployeeService,
    getEmployeesByIdUserService,
    deleteEmployeeByIdService,
    updateEmployeeByIdService,
};
