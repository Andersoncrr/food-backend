import { Employee } from "@/models/employee";

export const getEmployeeById = async (idEmployee: string) => {
    const employee = await Employee.findById(idEmployee);
    return employee;
  };