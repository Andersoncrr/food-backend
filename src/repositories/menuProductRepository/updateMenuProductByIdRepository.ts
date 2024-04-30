import { MenuProduct } from '@/models/menuProducts';

export const updateMenuProductByIdRepository = async (menuProduct) => {
    const newMenuProduct = await MenuProduct.findByIdAndUpdate(
        menuProduct._id,
        menuProduct,
        { new: true },
    );
    return newMenuProduct;
};
