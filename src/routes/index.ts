import { Router } from 'express';
import { userRoutes } from './userRoutes';
import { employeeRoutes } from './employeeRoutes';
import { menuCategoryRoutes } from './menuCategoryRoutes';
import { menuProductRoutes } from './menuProductRoutes';

export const router: Router = Router();

router.use('/employee', employeeRoutes);
router.use('/user', userRoutes);
router.use('/menu-category', menuCategoryRoutes);
router.use('/menu-product', menuProductRoutes);
