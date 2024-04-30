import { Schema } from 'mongoose';

export interface typeToppingCategory {
    _id?: Schema.Types.ObjectId;
    idUser: Schema.Types.ObjectId;
    name: string;
    description: string;
    minToppingsForCategory: number;
    maxToppingsForCategory: number;
    status?: string;
}
