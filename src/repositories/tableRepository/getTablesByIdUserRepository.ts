import { Table } from '@/models/table';

export const getTablesByIdUserRepository = async (idUser) => {
    const tables = await Table.find({ idUser });
    return tables;
};
