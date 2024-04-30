import { upload } from '@/config/multer';
import { menuProductsController } from '@/controllers/menuProducts';
import { Router } from 'express';

export const menuProductRoutes: Router = Router();

menuProductRoutes
    .route('/')
    .post(
        upload.array('productImages', 10),
        menuProductsController.createMenuProductController,
    );

menuProductRoutes
    .route('/:idUser')
    .get(menuProductsController.getMenuProductsController);

menuProductRoutes
    .route('/:idMenuProduct')
    .put(menuProductsController.updateMenuProductController)
    .delete(menuProductsController.deleteMenuProducByIdController);
