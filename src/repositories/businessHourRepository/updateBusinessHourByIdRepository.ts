import { BusinessHour } from '@/models/businessHour';
import { typeBusinessHour } from '@/types/businessHour';

export const updateBusinessHourByIdRepository = async (
    businessHour: typeBusinessHour,
) => {
    const updateBusinessHour = await BusinessHour.findByIdAndUpdate(
        businessHour._id,
        businessHour,
        { new: true },
    );
    return updateBusinessHour;
};
