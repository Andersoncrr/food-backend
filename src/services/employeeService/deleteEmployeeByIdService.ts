import { STATUS } from '@/const/status';
import { employeeRepository } from '@/repositories/employeeRepository';
import { isValidObjectId } from 'mongoose';

export const deleteEmployeeByIdService = async (idEmployee: string) => {
    if (!isValidObjectId(idEmployee)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de la categoría no es válido.',
        };
    }

    const employee =
        await employeeRepository.getEmployeeByIdRepository(idEmployee);

    if (!employee) {
        throw {
            error: true,
            status: 404,
            message:
                'No se encontró ningun empleado con el ID de usuario proporcionado.',
        };
    }

    employee.status = STATUS.DELETE;
    const newEmployee =
        await employeeRepository.updateEmployeeByIdRepository(employee);

    return newEmployee;
};
