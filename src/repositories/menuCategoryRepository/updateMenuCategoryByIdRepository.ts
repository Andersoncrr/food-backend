import { MenuCategory } from '@/models/menuCategory';
import { typeMenuCategory } from '@/types/menuCategory';

export const updateMenuCategoryByIdRepository = async (
    menuCategory: typeMenuCategory,
) => {
    const newMenuCategory = await MenuCategory.findByIdAndUpdate(
        menuCategory._id,
        menuCategory,
        { new: true },
    );
    return newMenuCategory;
};
