import { userService } from "@/services/userService";
import { NextFunction, Request, Response } from "express";
import { typeUser } from "@/types/users";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password }: typeUser = req.body;

    const token = await userService.createUser({ name, email, password });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};