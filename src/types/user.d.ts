import { Schema } from 'mongoose';
export interface typeUser {
    _id?: Schema.Types.ObjectId;
    name: string;
    lastName?: string;
    email: string;
    password: string;
    permissions?: Array<'admin'>;
    typeLogin?: string;
}
