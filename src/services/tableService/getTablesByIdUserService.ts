import { tableRepository } from '@/repositories/tableRepository';
import { isValidObjectId } from 'mongoose';

export const getTablesByIdUserService = async (idUser) => {
    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const tables = await tableRepository.getTablesByIdUserRepository(idUser);
    return tables;
};
