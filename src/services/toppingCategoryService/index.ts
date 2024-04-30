import { createToppingCategoryService } from './createToppingCategoryService';
import { updateToppingCategoryByIdService } from './updateToppingCategoryByIdService';
import { deleteMenuCategoryByIdService } from './deleteMenuCategoryByIdService';
import { getToppingCategoriesByIdUserService } from './getToppingCategoriesByIdUserService';

export const toppingCategoryService = {
    createToppingCategoryService,
    updateToppingCategoryByIdService,
    deleteMenuCategoryByIdService,
    getToppingCategoriesByIdUserService,
};
