import { createMenuCategoryRepository } from './createMenuCategoryRepository';
import { getMenuCategoryByIdRepository } from './getMenuCategoryByIdRepository';
import { updateMenuCategoryByIdRepository } from './updateMenuCategoryByIdRepository';
import { getMenuCategoriesByIdUserRepository } from './getMenuCategoriesByIdUserRepository';

export const menuCategoryRepository = {
    createMenuCategoryRepository,
    getMenuCategoryByIdRepository,
    updateMenuCategoryByIdRepository,
    getMenuCategoriesByIdUserRepository,
};
