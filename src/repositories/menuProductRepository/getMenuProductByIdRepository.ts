import { MenuProduct } from '@/models/menuProducts';

export const getMenuProductByIdRepository = async (idMenuProduct) => {
    const menuProduct = await MenuProduct.findById(idMenuProduct);
    return menuProduct;
};
