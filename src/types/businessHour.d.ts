import { STATUS } from '@/const/status';
import { Schema } from 'mongoose';

export interface typeBusinessHour {
    _id?: Schema.Types.ObjectId;
    idUser: Schema.Types.ObjectId;
    monday: typeDay;
    tuesday: typeDay;
    wednesday: typeDay;
    thursday: typeDay;
    friday: typeDay;
    saturday: typeDay;
    sunday: typeDay;
}

export interface typeDay {
    startTime: string;
    endTime: string;
    status: STATUS;
}
