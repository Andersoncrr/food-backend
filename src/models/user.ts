import { typeUser } from "@/types/user";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<typeUser>({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  permissions: {
    type: [{ type: String, enum: ["admin"] }],
    default: ["admin"],
  },
});

export const User = mongoose.model("User", userSchema);
