import { Employee } from "@/models/employee";

export const getEmployee = async (email: string) => {
  const employee = await Employee.findOne({ email });
  return employee;
};
