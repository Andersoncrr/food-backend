import { businessHourService } from '@/services/businessHourService';

import { NextFunction, Request, Response } from 'express';

export const getBusinessHourController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { idUser } = req.params;

        const businessHour =
            await businessHourService.getBusinessHourService(idUser);
        res.status(200).json(businessHour);
    } catch (error) {
        next(error);
    }
};
