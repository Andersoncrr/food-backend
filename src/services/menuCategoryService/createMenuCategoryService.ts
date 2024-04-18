import { menuCategoryRepository } from '@/repositories/menuCategoryRepository';
import { typeMenuCategory } from '@/types/menuCategory';
import { isValidObjectId } from 'mongoose';

export const createMenuCategoryService = async (
    menuCategoryData: typeMenuCategory,
) => {
    if (!isValidObjectId(menuCategoryData.idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const menuCategory =
        await menuCategoryRepository.createMenuCategoryRepository(
            menuCategoryData,
        );

    return menuCategory;
};
