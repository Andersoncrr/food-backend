import { createMenuCategoryService } from './createMenuCategoryService';
import { updateMenuCategoryByIdService } from './updateMenuCategoryByIdService';
import { deleteMenuCategoryByIdService } from './deleteMenuCategoryByIdService';
import { getMenuCategoriesByIdUserService } from './getMenuCategoriesByIdUserService';

export const menuCategoryService = {
    createMenuCategoryService,
    updateMenuCategoryByIdService,
    deleteMenuCategoryByIdService,
    getMenuCategoriesByIdUserService,
};
