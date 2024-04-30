import { STATUS } from '@/const/status';
import { Employee } from '@/models/employee';

export const getEmployeesByIdUserRepository = async (idUser: string) => {
    const allEmployee = await Employee.find({ idUser, status: STATUS.ACTIVE });
    return allEmployee;
};
