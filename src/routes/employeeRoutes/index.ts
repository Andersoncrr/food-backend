import { employeeController } from "@/controllers/employeeController";
import { Router } from "express";

export const employeeRoutes: Router = Router();

employeeRoutes.route("/").post(employeeController.createEmployeeController);
employeeRoutes.route("/:idUser").get(employeeController.getAllEmployees);
employeeRoutes.route("/:idEmployee").delete(employeeController.deleteEmployee).put(employeeController.updateEmployeeById)

