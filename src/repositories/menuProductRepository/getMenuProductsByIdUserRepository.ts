import { STATUS } from '@/const/status';
import { MenuProduct } from '@/models/menuProducts';

export const getMenuProductsIdUserRepository = async (idUser: string) => {
    const allMenuProduct = await MenuProduct.find({
        idUser,
        status: STATUS.ACTIVE,
    });
    return allMenuProduct;
};
