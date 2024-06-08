import { BusinessHour } from '@/models/businessHour';

export const findBusinessHoursByIdUser = async (idUser) => {
    const businessHour = await BusinessHour.findOne({ idUser });
    return businessHour;
};
