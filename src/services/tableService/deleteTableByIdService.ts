import { STATUS } from '@/const/status';
import { tableRepository } from '@/repositories/tableRepository';
import { isValidObjectId } from 'mongoose';

export const deleteTableByIdService = async (idTable) => {
    if (!isValidObjectId(idTable)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de la mesa no es válido.',
        };
    }

    const table = await tableRepository.getTableByIdRepository(idTable);

    if (!table) {
        throw {
            error: true,
            status: 404,
            message: 'No se encontró ninguna mesa por el Id proporcionado.',
        };
    }
    table.status = STATUS.DELETE;

    const newTable = await tableRepository.updateTableByIdRepository(table);

    return newTable;
};
