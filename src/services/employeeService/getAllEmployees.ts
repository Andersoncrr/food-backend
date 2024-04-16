import { Employee } from "@/models/employee";

export const getAllEmployees = async () => {
  const allEmployee = await Employee.find();
  return allEmployee;
};
