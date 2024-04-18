import { employeeController } from '@/controllers/employeeController';
import { Router } from 'express';

export const employeeRoutes: Router = Router();

employeeRoutes.route('/').post(employeeController.createEmployeeController);
employeeRoutes
    .route('/:idUser')
    .get(employeeController.getAllEmployeesControllers);
employeeRoutes
    .route('/:idEmployee')
    .delete(employeeController.deleteEmployeeController)
    .put(employeeController.updateEmployeeController);
