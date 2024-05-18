import { Table } from '@/models/table';

export const createTableByIdUserRepository = async (tableData) => {
    const newTable = await Table.create(tableData);
    return newTable;
};
