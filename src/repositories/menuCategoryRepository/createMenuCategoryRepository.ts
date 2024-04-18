import { MenuCategory } from '@/models/menuCategory';
import { typeMenuCategory } from '@/types/menuCategory';

export const createMenuCategoryRepository = async (
    menuCategory: typeMenuCategory,
) => {
    const newMenuCategory = await MenuCategory.create(menuCategory);
    return newMenuCategory;
};
