import { Table } from '@/models/table';

export const updateTableByIdRepository = async (table) => {
    const newTable = await Table.findByIdAndUpdate(table._id, table, {
        new: true,
    });
    return newTable;
};
