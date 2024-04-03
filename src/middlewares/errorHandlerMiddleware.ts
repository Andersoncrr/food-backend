import { Error } from "@/types/error";
import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, status, message } = err;
  if (error && status && message) {
    res.status(status).json(err);
  } else {
    res.status(500).json({
      status: 500,
      message: "Service not available.",
    });
  }
};
