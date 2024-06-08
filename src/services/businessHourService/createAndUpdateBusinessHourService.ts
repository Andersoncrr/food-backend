import { businessHourRepository } from '@/repositories/businessHourRepository';
import { typeBusinessHour } from '@/types/businessHour';
import { isValidObjectId } from 'mongoose';

export const createAndUpdateBusinessHourService = async (
    businessHourData: typeBusinessHour,
) => {
    const {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        idUser,
    } = businessHourData;

    if (!isValidObjectId(idUser)) {
        throw {
            error: true,
            status: 400,
            message: 'El ID del usuario no es válido.',
        };
    }

    const businessHour =
        await businessHourRepository.findBusinessHoursByIdUser(idUser);

    if (businessHour) {
        businessHour.monday = monday || businessHour.monday;
        businessHour.tuesday = tuesday || businessHour.tuesday;
        businessHour.wednesday = wednesday || businessHour.wednesday;
        businessHour.thursday = thursday || businessHour.thursday;
        businessHour.friday = friday || businessHour.friday;
        businessHour.saturday = saturday || businessHour.saturday;
        businessHour.sunday = sunday || businessHour.sunday;

        const updateBusinessHour =
            await businessHourRepository.updateBusinessHourByIdRepository(
                businessHour,
            );
        return updateBusinessHour;
    }

    const newBusinessHour =
        await businessHourRepository.createBusinessHourRepository({
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
            idUser,
        });
    return newBusinessHour;
};
