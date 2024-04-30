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
    .get(menuProductsController.getMenuProductsByIdUserController);

menuProductRoutes
    .route('/:idMenuProduct')
    .put(menuProductsController.updateMenuProductByIdController)
    .delete(menuProductsController.deleteMenuProducByIdController);
