import { menuProductRepository } from '@/repositories/menuProductRepository';
import { isValidObjectId } from 'mongoose';

export const createMenuProductService = async (menuProductData) => {
    const { idUser, category } = menuProductData;

    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID y Categoria de usuario proporcionado no es válido.',
        };
    }
    if (!isValidObjectId(category)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID y Categoria de usuario proporcionado no es válido.',
        };
    }

    const menuProduct =
        await menuProductRepository.createMenuProductRepository(
            menuProductData,
        );
    return menuProduct;
};
