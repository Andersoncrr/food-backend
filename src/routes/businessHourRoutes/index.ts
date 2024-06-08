import { businessHourController } from '@/controllers/businessHourController';
import { Router } from 'express';

export const businessHourRoutes: Router = Router();

businessHourRoutes
    .route('/')
    .post(businessHourController.createAndUpdateBusinessHourController);

businessHourRoutes
    .route('/:idUser')
    .get(businessHourController.getBusinessHourController);
