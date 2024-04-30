import { STATUS } from '@/const/status';
import { ToppingCategory } from '@/models/toppingCategory';

export const getToppingCategoriesByIdUserRepository = async (
    idUser: string,
) => {
    const toppingCategories = await ToppingCategory.find({
        idUser,
        status: STATUS.ACTIVE,
    });
    return toppingCategories;
};
