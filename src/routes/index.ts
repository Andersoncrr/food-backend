import { Router } from "express";
import { usersRoutes } from "./usersRoutes";

export const router: Router = Router();

router.use("/user", usersRoutes);
