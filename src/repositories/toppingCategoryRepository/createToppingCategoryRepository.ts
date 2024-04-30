import { ToppingCategory } from '@/models/toppingCategory';
import { typeToppingCategory } from '@/types/toppingCategory';

export const createToppingCategoryRepository = async (
    toppingCategoryData: typeToppingCategory,
) => {
    const newToppingCategory =
        await ToppingCategory.create(toppingCategoryData);
    return newToppingCategory;
};
