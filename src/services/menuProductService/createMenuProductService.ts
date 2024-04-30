import { menuProductsRepository } from '@/repositories/menuProductRepository';
import { isValidObjectId } from 'mongoose';

export const createMenuProductService = async (menuProductData, files) => {
    const { idUser, category } = menuProductData;
    const productImages = (files as Express.Multer.File[]).map((file) => ({
        url: file.path,
        type: file.mimetype,
        name: file.filename,
    }));

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
        await menuProductsRepository.createMenuProductRepository({
            ...menuProductData,
            productImages,
        });
    return menuProduct;
};
