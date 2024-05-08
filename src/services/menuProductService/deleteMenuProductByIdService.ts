import { isValidObjectId } from 'mongoose';
import { STATUS } from '@/const/status';
import { menuProductRepository } from '@/repositories/menuProductRepository';

export const deleteMenuProductByIdService = async (idMenuProduct) => {
    if (!isValidObjectId(idMenuProduct)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de la categoría no es válido.',
        };
    }

    const menuProduct =
        await menuProductRepository.getMenuProductByIdRepository(idMenuProduct);

    if (!menuProduct) {
        throw {
            error: true,
            status: 404,
            message: 'No se encontró ningun producto del  menu  proporcionado.',
        };
    }

    menuProduct.status = STATUS.DELETE;

    const newMenuProduct =
        await menuProductRepository.updateMenuProductByIdRepository(
            menuProduct,
        );

    return newMenuProduct;
};
