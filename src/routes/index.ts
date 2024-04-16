import { Router } from "express";
import { usersRoutes } from "./usersRoutes";
import { employeeRoutes } from "./employeeRoutes";
import { menuCategoryRoutes } from "./menuCategoryRoutes";

export const router: Router = Router();

router.use("/user", usersRoutes);
router.use("/employee", employeeRoutes);



router.use("/user", userRoutes);
router.use("/menu-category", menuCategoryRoutes);
