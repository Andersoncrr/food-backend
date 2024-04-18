import { menuCategoryRepository } from '@/repositories/menuCategoryRepository';
import { typeMenuCategory } from '@/types/menuCategory';
import { isValidObjectId } from 'mongoose';

export const updateMenuCategoryService = async (
    idMenuCategory: string,
    menuCategoryData: typeMenuCategory,
) => {
    const { name, description } = menuCategoryData;
    if (!isValidObjectId(idMenuCategory)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de la categoría no es válido.',
        };
    }

    const menuCategory =
        await menuCategoryRepository.getMenuCategoryByIdRepository(
            idMenuCategory,
        );

    if (!menuCategory) {
        throw {
            error: true,
            status: 404,
            message:
                'No se encontró ninguna categoría de menú para el ID de usuario proporcionado.',
        };
    }

    menuCategory.name = name || menuCategory.name;
    menuCategory.description = description || menuCategory.description;

    const newMenuCategory =
        await menuCategoryRepository.updateMenuCategoryByIdRepository(
            menuCategory,
        );

    return newMenuCategory;
};
