import { businessHourRepository } from '@/repositories/businessHourRepository';
import { isValidObjectId } from 'mongoose';

export const getBusinessHourService = async (idUser: string) => {
    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID de usuario proporcionado no es válido.',
        };
    }
    const businessHour =
        await businessHourRepository.findBusinessHoursByIdUser(idUser);

    return businessHour;
};
