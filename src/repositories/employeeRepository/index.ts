import { getEmployeeByEmailRepository } from './getEmployeeByEmailRepository';
import { createEmployeeRepository } from './createEmployeeRepository';
import { getAllEmployeesByIdUserRepository } from './getAllEmployeesByIdUserRepository';
import { updateEmployeeByIdRepository } from './updateEmployeeByIdRepository';
import { getEmployeeByIdRepository } from './getEmployeeByIdRepository';

export const employeeRepository = {
    getEmployeeByEmailRepository,
    createEmployeeRepository,
    getAllEmployeesByIdUserRepository,
    updateEmployeeByIdRepository,
    getEmployeeByIdRepository,
};
