import { ToppingCategory } from '@/models/toppingCategory';
import { typeToppingCategory } from '@/types/toppingCategory';

export const updateToppingCategoryByIdRepository = async (
    toppingCategory: typeToppingCategory,
) => {
    const newToppingCategory = await ToppingCategory.findByIdAndUpdate(
        toppingCategory._id,
        toppingCategory,
        { new: true },
    );
    return newToppingCategory;
};
