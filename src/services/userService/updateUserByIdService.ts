import { toppingCategoryRepository } from '@/repositories/toppingCategoryRepository';
import { userRepository } from '@/repositories/userRepository';
import { typeToppingCategory } from '@/types/toppingCategory';
import { typeUser } from '@/types/user';
import { isValidObjectId } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const updateUserByIdService = async (
    idUser: string,
    userData: typeUser,
) => {
    const { name, lastName, email, password } = userData;
    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de el usuario no es válido.',
        };
    }

    const user = await userRepository.getUserByIdRepository(idUser);

    if (!user) {
        throw {
            error: true,
            status: 404,
            message: 'No se encontró ningún usuario con este id.',
        };
    }

    user.name = name || user.name;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;

    if (password) {
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);
        user.password = encryptedPassword;
    }

    const newUserData = await userRepository.updateUserByidRepository(user);

    const { password: userPassword, ...newUser } = newUserData.toJSON();

    const token = jwt.sign(newUser, 'key-token');

    return token;
};
