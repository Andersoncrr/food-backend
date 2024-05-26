import { createEmployeeService } from './createEmployeeService';
import { getEmployeesByIdUserService } from './getEmployeesByIdUserService';
import { deleteEmployeeByIdService } from './deleteEmployeeByIdService';
import { updateEmployeeByIdService } from './updateEmployeeByIdService';
import { authEmployeeService } from './authEmployeeService';

export const employeeService = {
    createEmployeeService,
    getEmployeesByIdUserService,
    deleteEmployeeByIdService,
    updateEmployeeByIdService,
    authEmployeeService,
};
