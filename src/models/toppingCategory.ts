import { STATUS } from '@/const/status';
import { typeToppingCategory } from '@/types/toppingCategory';
import mongoose, { Schema } from 'mongoose';

const toppingCategorySchema = new Schema<typeToppingCategory>({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    minToppingsForCategory: {
        type: Number,
        require: true,
    },
    maxToppingsForCategory: {
        type: Number,
        require: true,
    },
    status: {
        type: String,
        require: true,
        default: STATUS.ACTIVE,
    },
});

export const ToppingCategory = mongoose.model(
    'ToppingCategory',
    toppingCategorySchema,
);
