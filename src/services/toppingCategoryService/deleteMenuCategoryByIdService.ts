import { STATUS } from '@/const/status';
import { toppingCategoryRepository } from '@/repositories/toppingCategoryRepository';
import { isValidObjectId } from 'mongoose';

export const deleteMenuCategoryByIdService = async (
    idToppingCategory: string,
) => {
    if (!isValidObjectId(idToppingCategory)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de la categoría no es válido.',
        };
    }

    const toppingCategory =
        await toppingCategoryRepository.getToppingCategoryByIdRepository(
            idToppingCategory,
        );

    if (!toppingCategory) {
        throw {
            error: true,
            status: 404,
            message:
                'No se encontró ninguna categoría de menú para el ID de usuario proporcionado.',
        };
    }

    toppingCategory.status = STATUS.DELETE;

    const newToppingCategory =
        await toppingCategoryRepository.updateToppingCategoryByIdRepository(
            toppingCategory,
        );

    return newToppingCategory;
};
