import { tableController } from '@/controllers/tableController';
import { Router } from 'express';

export const tableRoutes: Router = Router();

tableRoutes
    .route('/')
    .post(tableController.createTableByIdUser)
    .put(tableController.updateTableByIdController);
tableRoutes
    .route('/all/:idUser')
    .get(tableController.getTablesByIdUserController);
tableRoutes
    .route('/:idTable')
    .delete(tableController.deleteTableByIdController);
