import { employeeRepository } from '@/repositories/employeeRepository';
import { typeEmployee } from '@/types/employee';
import { isValidObjectId } from 'mongoose';
import bcrypt from 'bcrypt';

export const updateEmployeeByIdService = async (
    idEmployee: string,
    employeeData: typeEmployee,
) => {
    const { name, email, position, phone, idUser, password } = employeeData;

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
                'No se encontró ningun empleado con  el ID de usuario proporcionado.',
        };
    }

    employee.name = name || employee.name;
    employee.email = email || employee.email;
    employee.position = position || employee.position;
    employee.phone = phone || employee.phone;
    employee.idUser = idUser || employee.idUser;
    if (password) {
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);
        employee.password = encryptedPassword;
    }

    const saveEmployee =
        await employeeRepository.updateEmployeeByIdRepository(employee);

    const { password: employeePassword, ...newEmployee } =
        saveEmployee.toJSON();

    return newEmployee;
};
