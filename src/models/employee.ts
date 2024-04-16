import { STATUS } from "@/const/status";
import { typeEmployee } from "@/types/employee";
import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema<typeEmployee>({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default: STATUS.ACTIVE,
  },
});

export const Employee = mongoose.model("Employee", employeeSchema);
