import { createToppingCategoryRepository } from './createToppingCategoryRepository';
import { getToppingCategoryByIdRepository } from './getToppingCategoryByIdRepository';
import { updateToppingCategoryByIdRepository } from './updateToppingCategoryByIdRepository';

export const toppingCategoryRepository = {
    createToppingCategoryRepository,
    getToppingCategoryByIdRepository,
    updateToppingCategoryByIdRepository,
};
