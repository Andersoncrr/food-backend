import { STATUS } from "@/const/status";
import { Employee } from "@/models/employee";

export const getAllEmployees = async (idUser:string) => {
  const allEmployee = await Employee.find({idUser, status:STATUS.ACTIVE});
  return allEmployee;
};