import { STATUS } from '@/const/status';
import { MenuCategory } from '@/models/menuCategory';

export const getMenuCategories = async (idUser: string) => {
    const menuCategory = await MenuCategory.find({
        idUser,
        status: STATUS.ACTIVE,
    });
    return menuCategory;
};
