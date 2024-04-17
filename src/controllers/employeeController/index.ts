import { createEmployeeController } from "./createEmployeeController";
import { getAllEmployees } from "./getAllEmployeesControllers";
import {deleteEmployee} from "./deleteEmployeeController"
import {updateEmployeeById} from "./updateEmployeeController"

export const employeeController = {
  createEmployeeController,
  getAllEmployees,
  deleteEmployee,
  updateEmployeeById
};
