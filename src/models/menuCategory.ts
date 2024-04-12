import { STATUS } from "@/const/status";
import { typeMenuCategory } from "@/types/menuCategory";
import mongoose, { Schema } from "mongoose";

const menuCategorySchema = new Schema<typeMenuCategory>({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default: STATUS.ACTIVE,
  },
});

export const MenuCategory = mongoose.model("menuCategory", menuCategorySchema);
