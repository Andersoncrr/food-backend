import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { menuCategoryRoutes } from "./menuCategoryRoutes";

export const router: Router = Router();

router.use("/user", userRoutes);
router.use("/menu-category", menuCategoryRoutes);
