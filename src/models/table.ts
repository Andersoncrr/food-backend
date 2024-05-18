import { STATUS } from '@/const/status';
import { typeTable } from '@/types/table';
import mongoose, { Schema } from 'mongoose';

const tableSchema = new Schema<typeTable>({
    number: {
        type: Number,
    },
    capacity: {
        type: Number,
    },
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        require: true,
        default: STATUS.ACTIVE,
    },
});

export const Table = mongoose.model('Table', tableSchema);
