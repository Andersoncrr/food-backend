import { menuProductRepository } from '@/repositories/menuProductRepository';
import { isValidObjectId } from 'mongoose';

export const getMenuProductByIdService = async (idMenuProduct: string) => {
    if (!isValidObjectId(idMenuProduct)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }

    const menuProduct =
        await menuProductRepository.getMenuProductByIdRepository(idMenuProduct);

    return menuProduct;
};
