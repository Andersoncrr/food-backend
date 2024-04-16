import { employeeRepository } from "@/repositories/employeeRepository";
import { typeEmployee } from "@/types/employee";

export const createEmployee = async (employeeData: typeEmployee) => {
  const { email } = employeeData;

  const employee = await employeeRepository.getEmployee(email);

  if (employee) {
    throw {
      error: true,
      status: 409,
      message: "Employee already exists.",
    };
  }

  const saveEmployee = await employeeRepository.createEmployee(employeeData);

  return saveEmployee;
};
