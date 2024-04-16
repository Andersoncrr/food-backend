import { employeeService } from "@/services/employeeService";
import { NextFunction, Request, Response } from "express";

export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.params
    const allEmployees = await employeeService.getAllEmployees(idUser);
    res.status(200).json(allEmployees);
  } catch (error) {
    next(error);
  }
};
