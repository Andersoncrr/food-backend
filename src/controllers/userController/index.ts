import { createUserController } from './createUserController';
import { authUserController } from './authUserController';
import { updateUserByIdController } from './updateUserByIdController';

export const userController = {
    createUserController,
    authUserController,
    updateUserByIdController,
};
