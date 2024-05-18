import { createTableByIdUserRepository } from './createTableRepository';
import { getTablesByIdUserRepository } from './getTablesByIdUserRepository';
import { getTableByIdRepository } from './getTableByIdRepository';
import { updateTableByIdRepository } from './updateTableByIdRepository';

export const tableRepository = {
    createTableByIdUserRepository,
    getTablesByIdUserRepository,
    getTableByIdRepository,
    updateTableByIdRepository,
};
