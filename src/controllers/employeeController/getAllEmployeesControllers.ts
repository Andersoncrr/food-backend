import { employeeService } from "@/services/employeeService";
import { NextFunction, Request, Response } from "express";

export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { employees } = req.body;
    const allEmployees = await employeeService.getAllEmployees();
    res.status(200).json(allEmployees);
  } catch (error) {
    next(error);
  }
};
