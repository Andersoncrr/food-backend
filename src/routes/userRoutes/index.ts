import { userController } from '@/controllers/userController';
import { Router } from 'express';

export const userRoutes: Router = Router();

userRoutes.route('/').post(userController.createUserController);
userRoutes.route('/auth').post(userController.authUserController);
userRoutes.route('/:idUser').put(userController.updateUserByIdController);
