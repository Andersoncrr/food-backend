import { Employee } from '@/models/employee';

export const getEmployeeByIdRepository = async (idEmployee: string) => {
    const employee = await Employee.findById(idEmployee);
    return employee;
};
