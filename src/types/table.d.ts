import { Schema } from 'mongoose';

export interface typeTable {
    number: number;
    capacity: number;
    idUser: Schema.Types.ObjectId;
    status?: string;
}
