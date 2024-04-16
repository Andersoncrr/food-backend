import { userRepository } from "@/repositories/userRepository";
import { typeUser } from "@/types/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (userData: typeUser) => {
  const { password, email } = userData;

  const user = await userRepository.getUser(email);

  if (user) {
    throw {
      error: true,
      status: 409,
      message: "User already exists.",
    };
  }

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const saveUser = await userRepository.createUser({
    ...userData,
    password: encryptedPassword,
  });

  const { password: userPassword, ...newUser } = saveUser.toJSON();

  const token = jwt.sign(newUser, "key-token");

  return token;
};
