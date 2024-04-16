import { Employee } from "@/models/employee";
import { typeEmployee } from "@/types/employee";

export const createEmployee = async (employee: typeEmployee) => {
  const newEmployee = await Employee.create(employee);
  return newEmployee;
};
