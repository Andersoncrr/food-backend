import { toppingCategoryRepository } from '@/repositories/toppingCategoryRepository';
import { typeToppingCategory } from '@/types/toppingCategory';
import { isValidObjectId } from 'mongoose';

export const createToppingCategoryService = async (
    toppingCategoryData: typeToppingCategory,
) => {
    if (!isValidObjectId(toppingCategoryData.idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const toppingCategory =
        await toppingCategoryRepository.createToppingCategoryRepository(
            toppingCategoryData,
        );

    return toppingCategory;
};
