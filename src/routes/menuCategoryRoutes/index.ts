import { menuCategoryController } from '@/controllers/menuCategoryController';
import { Router } from 'express';

export const menuCategoryRoutes: Router = Router();

menuCategoryRoutes
    .route('/')
    .post(menuCategoryController.createMenuCategoryController);

menuCategoryRoutes
    .route('/:idUser')
    .get(menuCategoryController.getMenuCategoriesController);

menuCategoryRoutes
    .route('/:idMenuCategory')
    .put(menuCategoryController.updateMenuCategoryController)
    .delete(menuCategoryController.deleteMenuCategoryController);
