import { createToppingCategoryRepository } from './createToppingCategoryRepository';
import { getToppingCategoryByIdRepository } from './getToppingCategoryByIdRepository';
import { updateToppingCategoryByIdRepository } from './updateToppingCategoryByIdRepository';
import { getToppingCategoriesByIdUserRepository } from './getToppingCategoriesByIdUserRepository';

export const toppingCategoryRepository = {
    createToppingCategoryRepository,
    getToppingCategoryByIdRepository,
    updateToppingCategoryByIdRepository,
    getToppingCategoriesByIdUserRepository,
};
