import { employeeController } from '@/controllers/employeeController';
import { Router } from 'express';

export const employeeRoutes: Router = Router();

employeeRoutes.route('/').post(employeeController.createEmployeeController);
employeeRoutes.route('/auth').post(employeeController.authEmployeeController);

employeeRoutes
    .route('/:idUser')
    .get(employeeController.getEmployeesByIdUserController);
employeeRoutes
    .route('/:idEmployee')
    .delete(employeeController.deleteEmployeeByIdController)
    .put(employeeController.updateEmployeeByIdController);
