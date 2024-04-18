import { STATUS } from '@/const/status';
import { menuCategoryRepository } from '@/repositories/menuCategoryRepository';
import { isValidObjectId } from 'mongoose';

export const deleteMenuCategory = async (idMenuCategory: string) => {
    if (!isValidObjectId(idMenuCategory)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de la categoría no es válido.',
        };
    }

    const menuCategory =
        await menuCategoryRepository.getMenuCategory(idMenuCategory);

    if (!menuCategory) {
        throw {
            error: true,
            status: 404,
            message:
                'No se encontró ninguna categoría de menú para el ID de usuario proporcionado.',
        };
    }

    menuCategory.status = STATUS.DELETE;

    const newMenuCategory =
        await menuCategoryRepository.updateMenuCategory(menuCategory);

    return newMenuCategory;
};
