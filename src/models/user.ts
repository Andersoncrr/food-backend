import { typeUser } from "@/types/users";
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
});

export const User = mongoose.model("User", userSchema);
