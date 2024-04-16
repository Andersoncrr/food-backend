
import { employeeRepository } from "@/repositories/employeeRepository";
import {  isValidObjectId } from "mongoose";

export const getAllEmployees = async (idUser:string) => {

  if (!isValidObjectId(idUser)) {
    throw {
      error: true,
      status: 400,
      message: "El ID de usuario proporcionado no es válido.",
    };
  }
  const allEmployee = await employeeRepository.getAllEmployees(idUser)
  
  return allEmployee;
};
