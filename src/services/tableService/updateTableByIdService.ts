import { tableRepository } from '@/repositories/tableRepository';
import { isValidObjectId } from 'mongoose';

export const updateTableByIdService = async ({
    idTable,
    number,
    capacity,
    x,
    y,
}) => {
    if (!isValidObjectId(idTable)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID  de la categoria no es válido.',
        };
    }

    const table = await tableRepository.getTableByIdRepository(idTable);

    if (!table) {
        throw {
            error: true,
            status: 404,
            message: 'No se encontró ninguna mesa proporcionado.',
        };
    }

    table.number = number || table.number;
    table.capacity = capacity || table.capacity;
    table.y = y || table.y;
    table.x = x || table.x;

    const newTable = await tableRepository.updateTableByIdRepository(table);
    return newTable;
};
