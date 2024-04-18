import { createMenuCategoryRepository } from './createMenuCategoryRepository';
import { getMenuCategoryByIdRepository } from './getMenuCategoryByIdRepository';
import { updateMenuCategoryByIdRepository } from './updateMenuCategoryByIdRepository';
import { getAllMenuCategoriesByIdUserRepository } from './getAllMenuCategoriesByIdUserRepository';

export const menuCategoryRepository = {
    createMenuCategoryRepository,
    getMenuCategoryByIdRepository,
    updateMenuCategoryByIdRepository,
    getAllMenuCategoriesByIdUserRepository,
};
