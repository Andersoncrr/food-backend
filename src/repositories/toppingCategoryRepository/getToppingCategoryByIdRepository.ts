import { ToppingCategory } from '@/models/toppingCategory';

export const getToppingCategoryByIdRepository = async (
    idToppingCategory: string,
) => {
    const menuCategory = await ToppingCategory.findById(idToppingCategory);
    return menuCategory;
};
