import { userRepository } from "@/repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authUser = async (email: string, password: string) => {
  const user = await userRepository.getUser(email);
  if (!user) {
    throw {
      error: true,
      status: 409,
      message: "User not exists.",
    };
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    throw {
      error: true,
      status: 409,
      message: "Password is invalid.",
    };
  }
  const { password: userPassword, ...userData } = user.toJSON();

  const token = jwt.sign(userData, "key-token");
  return token;
};
