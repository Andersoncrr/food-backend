import { Employee } from '@/models/employee';
import { typeEmployee } from '@/types/employee';

export const updateEmployeeByIdRepository = async (employee: typeEmployee) => {
    const updateEmployee = await Employee.findByIdAndUpdate(
        employee._id,
        employee,
        { new: true },
    );
    return updateEmployee;
};
