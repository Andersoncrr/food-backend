import { menuCategoryController } from '@/controllers/menuCategoryController';
import { Router } from 'express';

export const menuCategoryRoutes: Router = Router();

menuCategoryRoutes
    .route('/')
    .post(menuCategoryController.createMenuCategoryController);

menuCategoryRoutes
    .route('/:idUser')
    .get(menuCategoryController.getMenuCategoriesByIdUserController);

menuCategoryRoutes
    .route('/:idMenuCategory')
    .put(menuCategoryController.updateMenuCategoryByIdController)
    .delete(menuCategoryController.deleteMenuCategoryByIdController);
