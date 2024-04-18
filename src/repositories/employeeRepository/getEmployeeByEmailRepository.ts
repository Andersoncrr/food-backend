import { Employee } from '@/models/employee';

export const getEmployeeByEmailRepository = async (email: string) => {
    const employee = await Employee.findOne({ email });
    return employee;
};
