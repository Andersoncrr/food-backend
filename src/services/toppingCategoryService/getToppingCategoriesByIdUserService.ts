import { toppingCategoryRepository } from '@/repositories/toppingCategoryRepository';
import { isValidObjectId } from 'mongoose';

export const getToppingCategoriesByIdUserService = async (idUser: string) => {
    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const toppingCategories =
        await toppingCategoryRepository.getToppingCategoriesByIdUserRepository(
            idUser,
        );

    return toppingCategories;
};
