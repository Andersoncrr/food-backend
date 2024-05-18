import { createTableByIdUserService } from './createTableByIdUserService';
import { getTablesByIdUserService } from './getTablesByIdUserService';
import { updateTableByIdService } from './updateTableByIdService';
import { deleteTableByIdService } from './deleteTableByIdService';

export const tableService = {
    createTableByIdUserService,
    getTablesByIdUserService,
    updateTableByIdService,
    deleteTableByIdService,
};
