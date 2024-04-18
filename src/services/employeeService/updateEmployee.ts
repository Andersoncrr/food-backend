import { employeeRepository } from '@/repositories/employeeRepository';
import { typeEmployee } from '@/types/employee';
import { isValidObjectId } from 'mongoose';

export const updateEmployee = async (
    idEmployee: string,
    employeeData: typeEmployee,
) => {
    const { name, email, position, phone, idUser } = employeeData;

    if (!isValidObjectId(idEmployee)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de la categoría no es válido.',
        };
    }

    const employee = await employeeRepository.getEmployeeById(idEmployee);

    if (!employee) {
        throw {
            error: true,
            status: 404,
            message:
                'No se encontró ningun empleado con  el ID de usuario proporcionado.',
        };
    }

    employee.name = name || employee.name;
    employee.email = email || employee.email;
    employee.position = position || employee.position;
    employee.phone = phone || employee.phone;
    employee.idUser = idUser || employee.idUser;

    const newEmployee = await employeeRepository.updateEmployee(employee);

    return newEmployee;
};
