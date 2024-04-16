import { typeEmployee } from "@/types/employee";
import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema<typeEmployee>({
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
});

export const Employee = mongoose.model("Employee", employeeSchema);
