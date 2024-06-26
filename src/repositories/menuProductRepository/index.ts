import { getMenuProductsIdUserRepository } from './getMenuProductsByIdUserRepository';
import { createMenuProductRepository } from './createMenuProductsRepository';
import { getMenuProductByIdRepository } from './getMenuProductByIdRepository';
import { updateMenuProductByIdRepository } from './updateMenuProductByIdRepository';
import { addImagesToMenuProductByIdRepository } from './addImagesToMenuProductByIdRepository';

export const menuProductRepository = {
    getMenuProductsIdUserRepository,
    createMenuProductRepository,
    getMenuProductByIdRepository,
    updateMenuProductByIdRepository,
    addImagesToMenuProductByIdRepository,
};
