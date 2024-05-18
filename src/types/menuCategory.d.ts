import { Schema } from 'mongoose';

export interface typeMenuCategory {
    _id?: Schema.Types.ObjectId;
    name: string;
    description: string;
    status?: string;
    idUser: Schema.Types.ObjectId;
}
