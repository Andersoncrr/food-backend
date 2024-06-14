import { menuProductController } from '@/controllers/menuProductController';
import { uploadMiddleware } from '@/middlewares';
import { Router } from 'express';

export const menuProductRoutes: Router = Router();

menuProductRoutes
    .route('/')
    .post(menuProductController.createMenuProductController);

menuProductRoutes
    .route('/image/:idMenuProduct')
    .post(
        uploadMiddleware(1, 'products'),
        menuProductController.saveImagesMenuProductByIdController,
    );

menuProductRoutes
    .route('/all/:idUser')
    .get(menuProductController.getMenuProductsByIdUserController);

menuProductRoutes
    .route('/:idMenuProduct')
    .put(menuProductController.updateMenuProductByIdController)
    .delete(menuProductController.deleteMenuProducByIdController)
    .get(menuProductController.getMenuProductByIdController);
