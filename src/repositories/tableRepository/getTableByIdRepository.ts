import { Table } from '@/models/table';

export const getTableByIdRepository = async (idTable) => {
    const table = Table.findById(idTable);
    return table;
};
