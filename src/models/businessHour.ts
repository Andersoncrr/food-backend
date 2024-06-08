import { typeBusinessHour } from '@/types/businessHour';
import mongoose, { Schema } from 'mongoose';

const timeSlotSchema = new Schema({
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    active: {
        type: Boolean,
    },
});

const businessHourSchema = new Schema<typeBusinessHour>({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    monday: timeSlotSchema,
    tuesday: timeSlotSchema,
    wednesday: timeSlotSchema,
    thursday: timeSlotSchema,
    friday: timeSlotSchema,
    saturday: timeSlotSchema,
    sunday: timeSlotSchema,
});

export const BusinessHour = mongoose.model('BusinessHour', businessHourSchema);
