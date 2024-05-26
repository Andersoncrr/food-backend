import { employeeRepository } from '@/repositories/employeeRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authEmployeeService = async (email: string, password: string) => {
    const employee =
        await employeeRepository.getEmployeeByEmailRepository(email);

    if (!employee) {
        throw {
            error: true,
            status: 409,
            message: 'employee  not exists.',
        };
    }
    const validPassword = bcrypt.compareSync(password, employee.password);
    if (!validPassword) {
        throw {
            error: true,
            status: 409,
            message: 'Password is invalid.',
        };
    }
    const employeeData = employee.toJSON();
    delete employeeData.password;
    employeeData._id = employeeData.idUser;

    const token = jwt.sign(employeeData, 'key-token');
    return token;
};
