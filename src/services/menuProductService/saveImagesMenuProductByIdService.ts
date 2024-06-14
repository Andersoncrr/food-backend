import { menuProductRepository } from '@/repositories/menuProductRepository';
import { isValidObjectId } from 'mongoose';

export const saveImagesMenuProductByIdService = async (
    idMenuProduct,
    productImages,
) => {
    if (!isValidObjectId(idMenuProduct)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID  del producto no es válido.',
        };
    }

    const menuProduct =
        await menuProductRepository.getMenuProductByIdRepository(idMenuProduct);

    if (!menuProduct) {
        throw {
            error: true,
            status: 404,
            message: 'No se encontró ningun Producto del menú  proporcionado.',
        };
    }

    const newMenuProduct =
        await menuProductRepository.addImagesToMenuProductByIdRepository(
            idMenuProduct,
            productImages,
        );

    return newMenuProduct;
};
