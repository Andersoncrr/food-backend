import { menuProductRepository } from '@/repositories/menuProductRepository';
import { isValidObjectId } from 'mongoose';

export const updateMenuProductByIdService = async (
    { name, description, category, price },
    idMenuProduct,
) => {
    if (!isValidObjectId(category)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID  de la categoria no es válido.',
        };
    }

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
    menuProduct.name = name || menuProduct.name;
    menuProduct.description = description || menuProduct.description;
    menuProduct.category = category || menuProduct.category;
    menuProduct.price = price || menuProduct.price;

    const newMenuProduc =
        menuProductRepository.updateMenuProductByIdRepository(menuProduct);

    return newMenuProduc;
};
