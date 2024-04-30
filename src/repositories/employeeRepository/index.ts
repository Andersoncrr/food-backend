import { getEmployeeByEmailRepository } from './getEmployeeByEmailRepository';
import { createEmployeeRepository } from './createEmployeeRepository';
import { getEmployeesByIdUserRepository } from './getEmployeesByIdUserRepository';
import { updateEmployeeByIdRepository } from './updateEmployeeByIdRepository';
import { getEmployeeByIdRepository } from './getEmployeeByIdRepository';

export const employeeRepository = {
    getEmployeeByEmailRepository,
    createEmployeeRepository,
    getEmployeesByIdUserRepository,
    updateEmployeeByIdRepository,
    getEmployeeByIdRepository,
};
