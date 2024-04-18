import { MenuCategory } from '@/models/menuCategory';

export const getMenuCategoryByIdRepository = async (idMenuCategory: string) => {
    const menuCategory = await MenuCategory.findById(idMenuCategory);
    return menuCategory;
};
