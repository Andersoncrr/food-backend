import { Schema } from 'mongoose';

export interface typeEmployee {
    _id?: Schema.Types.ObjectId;
    name: string;
    email: string;
    position: string;
    phone: string;
    status?: string;
    typeLogin?: string;
    idUser: Schema.Types.ObjectId;
    password: string;
    permissions: Array<string>;
}
