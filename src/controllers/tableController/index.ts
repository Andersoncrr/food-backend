import { createTableByIdUser } from './createTableByIdUserController';
import { getTablesByIdUserController } from './getTablesByIdUserController';
import { updateTableByIdController } from './updateTableByIdController';
import { deleteTableByIdController } from './deleteTableByIdController';

export const tableController = {
    createTableByIdUser,
    getTablesByIdUserController,
    updateTableByIdController,
    deleteTableByIdController,
};
