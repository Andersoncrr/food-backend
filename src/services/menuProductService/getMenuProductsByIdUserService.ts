import { menuProductsRepository } from '@/repositories/menuProductRepository';
import { isValidObjectId } from 'mongoose';

export const getMenuProductsByIdUserService = async (idUser: string) => {
    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const allMenuProduct =
        await menuProductsRepository.getMenuProductsIdUserRepository(idUser);
    return allMenuProduct;
};
