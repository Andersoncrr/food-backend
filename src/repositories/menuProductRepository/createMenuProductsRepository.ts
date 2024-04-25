import { MenuProduct } from '@/models/menuProducts';

export const createMenuProductRepository = async (menuProductData) => {
    const newMenuProduct = await MenuProduct.create(menuProductData);
    return newMenuProduct;
};
