import { STATUS } from '@/const/status';
import mongoose, { Schema } from 'mongoose';

const menuProduct = new Schema<any>({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'menuCategory',
    },
    price: {
        type: String,
    },
    status: {
        type: String,
        require: true,
        default: STATUS.ACTIVE,
    },
    productImages: [
        {
            url: { type: String, require: true },
            type: { type: String, require: true },
            name: { type: String, require: true },
            size: { type: Number, require: true },
        },
    ],
});

export const MenuProduct = mongoose.model('MenuProduct', menuProduct);
