import { createUserRepository } from './createUserRepository';
import { getUserByEmailRepository } from './getUserByEmailRepository';
import { getUserByIdRepository } from './getUserByIdRepository';
import { updateUserByidRepository } from './updateUserByidRepository';

export const userRepository = {
    createUserRepository,
    getUserByEmailRepository,
    getUserByIdRepository,
    updateUserByidRepository,
};
