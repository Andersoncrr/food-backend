import { employeeRepository } from "@/repositories/employeeRepository";
import { typeEmployee } from "@/types/employee";
import { isValidObjectId } from "mongoose";

export const createEmployee = async (employeeData: typeEmployee) => {
  const { email ,idUser} = employeeData

  if (!isValidObjectId(idUser)) {
    throw {
      error: true,
      status: 400,
      message: "El ID de usuario proporcionado no es válido.",
    };
  }

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
