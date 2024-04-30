import { toppingCategoryRepository } from '@/repositories/toppingCategoryRepository';
import { typeToppingCategory } from '@/types/toppingCategory';
import { isValidObjectId } from 'mongoose';

export const updateToppingCategoryService = async (
    idToppingCategory: string,
    toppingCategoryData: typeToppingCategory,
) => {
    const {
        idUser,
        name,
        description,
        minToppingsForCategory,
        maxToppingsForCategory,
    } = toppingCategoryData;
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
                'No se encontró ninguna categoría de topping para el ID de usuario proporcionado.',
        };
    }

    toppingCategory.name = name || toppingCategory.name;
    toppingCategory.description = description || toppingCategory.description;
    toppingCategory.idUser = idUser || toppingCategory.idUser;
    toppingCategory.minToppingsForCategory =
        minToppingsForCategory || toppingCategory.minToppingsForCategory;
    toppingCategory.maxToppingsForCategory =
        maxToppingsForCategory || toppingCategory.maxToppingsForCategory;

    const newToppingCategory =
        await toppingCategoryRepository.updateToppingCategoryByIdRepository(
            toppingCategory,
        );

    return newToppingCategory;
};
