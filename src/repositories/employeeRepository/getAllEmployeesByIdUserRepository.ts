import { STATUS } from '@/const/status';
import { Employee } from '@/models/employee';

export const getAllEmployeesByIdUserRepository = async (idUser: string) => {
    const allEmployee = await Employee.find({ idUser, status: STATUS.ACTIVE });
    return allEmployee;
};
