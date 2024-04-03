import { userController } from "@/controllers/userController";
import { Router } from "express";

export const usersRoutes: Router = Router();

usersRoutes.route("/").post(userController.createUserController);
usersRoutes.route("/auth").post(userController.authUserController);
