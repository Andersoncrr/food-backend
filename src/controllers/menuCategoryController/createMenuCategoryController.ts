import { menuCategoryService } from "@/services/menuCategoryService";
import { NextFunction, Request, Response } from "express";

export const createMenuCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, description, idUser } = req.body;
  try {
    const menuCategory = await menuCategoryService.createMenuCategory({
      name,
      description,
      idUser,
    });

    res.status(200).json(menuCategory);
  } catch (error) {
    next(error);
  }
};
