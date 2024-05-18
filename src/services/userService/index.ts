import { createUserService } from './createUserService';
import { authUserService } from './authUserService';
import { updateUserByIdService } from './updateUserByIdService';

export const userService = {
    createUserService,
    authUserService,
    updateUserByIdService,
};
