import { menuCategoryRepository } from '@/repositories/menuCategoryRepository';
import { isValidObjectId } from 'mongoose';

export const getMenuCategoriesByIdUserService = async (idUser: string) => {
    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const menuCategories =
        await menuCategoryRepository.getMenuCategoriesByIdUserRepository(
            idUser,
        );

    return menuCategories;
};
