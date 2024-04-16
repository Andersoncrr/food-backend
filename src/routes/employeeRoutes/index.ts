import { employeeController } from "@/controllers/employeeController";
import { Router } from "express";

export const employeeRoutes: Router = Router();

employeeRoutes.route("/").post(employeeController.createEmployeeController);
employeeRoutes.route("/allemployees").get(employeeController.getAllEmployees);
