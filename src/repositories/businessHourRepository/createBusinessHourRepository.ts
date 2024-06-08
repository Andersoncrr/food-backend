import { BusinessHour } from '@/models/businessHour';
import { typeBusinessHour } from '@/types/businessHour';

export const createBusinessHourRepository = async (
    businessHour: typeBusinessHour,
) => {
    const newBusinessHour = await BusinessHour.create(businessHour);
    return newBusinessHour;
};
