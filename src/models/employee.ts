import { PERMISSIONS } from '@/const/permissions';
import { STATUS } from '@/const/status';
import { typeEmployee } from '@/types/employee';
import mongoose, { Schema } from 'mongoose';

const employeeSchema = new Schema<typeEmployee>({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    permissions: {
        type: [{ type: String, enum: PERMISSIONS }],
        require: true,
        default: [],
    },
    status: {
        type: String,
        require: true,
        default: STATUS.ACTIVE,
    },
    typeLogin: {
        type: String,
        default: 'employee',
    },
});

export const Employee = mongoose.model('Employee', employeeSchema);
