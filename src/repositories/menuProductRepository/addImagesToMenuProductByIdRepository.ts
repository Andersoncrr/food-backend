import { MenuProduct } from '@/models/menuProducts';

export const addImagesToMenuProductByIdRepository = async (
    id,
    productImages,
) => {
    return MenuProduct.findOneAndUpdate(
        { _id: id },
        { $push: { productImages: { $each: productImages } } },
        { new: true },
    );
};
