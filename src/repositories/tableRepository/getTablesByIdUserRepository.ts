import { STATUS } from '@/const/status';
import { Table } from '@/models/table';

export const getTablesByIdUserRepository = async (idUser) => {
    const tables = await Table.find({ idUser, status: { $ne: STATUS.DELETE } });
    return tables;
};
