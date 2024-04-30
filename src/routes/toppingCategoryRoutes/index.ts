import { toppingCategoryController } from '@/controllers/toppingCategoryController';
import { Router } from 'express';

export const toppingCategoryRoutes: Router = Router();

toppingCategoryRoutes
    .route('/')
    .post(toppingCategoryController.createToppingCategoryController);

toppingCategoryRoutes
    .route('/:idToppingCategory')
    .put(toppingCategoryController.updateToppingCategoryByIdController)
    .delete(toppingCategoryController.deleteToppingCategoryByIdController);
