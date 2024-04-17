import { STATUS } from "@/const/status";
import { employeeRepository } from "@/repositories/employeeRepository";
import { isValidObjectId } from "mongoose";



export const deleteEmployee = async (idEmployee: string) => {
  if (!isValidObjectId(idEmployee)) {
    throw {
      error: true,
      status: 400,
      message: "El ID de la categoría no es válido.",
    };
  }

  const employee = await employeeRepository.getEmployeeById(idEmployee)

  if (!employee) {
    throw {
      error: true,
      status: 404,
      message:
        "No se encontró ningun empleado con el ID de usuario proporcionado.",
    };
  }

  employee.status = STATUS.DELETE
  const newEmployee=await employeeRepository.updateEmployee(employee)

 
  return newEmployee;
};
