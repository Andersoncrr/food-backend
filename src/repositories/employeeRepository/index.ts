import { getEmployee } from "./getEmployee";
import { createEmployee } from "./createEmployee";
import{getAllEmployees} from "./getAllEmployees"
import {updateEmployee} from "./updateEmployee"
import{getEmployeeById} from "./getEmployeeById"




export const employeeRepository = {

  getEmployee,
  createEmployee,
  getAllEmployees,
  updateEmployee,
  getEmployeeById

 
};
