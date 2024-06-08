import { createBusinessHourRepository } from './createBusinessHourRepository';
import { findBusinessHoursByIdUser } from './findBusinessHoursByIdUserRepository';
import { updateBusinessHourByIdRepository } from './updateBusinessHourByIdRepository';

export const businessHourRepository = {
    findBusinessHoursByIdUser,
    updateBusinessHourByIdRepository,
    createBusinessHourRepository,
};
