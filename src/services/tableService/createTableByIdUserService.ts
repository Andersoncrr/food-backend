import { tableRepository } from '@/repositories/tableRepository';
import { isValidObjectId } from 'mongoose';

export const createTableByIdUserService = async (tableData) => {
    const { idUser } = tableData;

    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID del usuario  proporcionado no es válido.',
        };
    }

    const table =
        await tableRepository.createTableByIdUserRepository(tableData);
    return table;
};
