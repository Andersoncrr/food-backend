import { employeeRepository } from '@/repositories/employeeRepository';
import { typeEmployee } from '@/types/employee';
import { isValidObjectId } from 'mongoose';
import bcrypt from 'bcrypt';

export const createEmployeeService = async (employeeData: typeEmployee) => {
    const { email, idUser, password } = employeeData;

    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const employee =
        await employeeRepository.getEmployeeByEmailRepository(email);

    if (employee) {
        throw {
            error: true,
            status: 409,
            message: 'Employee already exists.',
        };
    }

    const saveEmployee = await employeeRepository.createEmployeeRepository({
        ...employeeData,
        password: encryptedPassword,
    });

    const { password: employeePassword, ...newEmployee } =
        saveEmployee.toJSON();

    return newEmployee;
};
