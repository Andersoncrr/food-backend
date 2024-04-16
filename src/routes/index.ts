import { Router } from "express";
import { usersRoutes } from "./usersRoutes";
import { employeeRoutes } from "./employeeRoutes";

export const router: Router = Router();

router.use("/user", usersRoutes);
router.use("/employee", employeeRoutes);
