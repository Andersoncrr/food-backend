import { businessHourService } from '@/services/businessHourService';

import { NextFunction, Request, Response } from 'express';

export const createAndUpdateBusinessHourController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const {
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
            idUser,
        } = req.body;

        const businessHour =
            await businessHourService.createAndUpdateBusinessHourService({
                monday,
                tuesday,
                wednesday,
                thursday,
                friday,
                saturday,
                sunday,
                idUser,
            });
        res.status(200).json(businessHour);
    } catch (error) {
        next(error);
    }
};
