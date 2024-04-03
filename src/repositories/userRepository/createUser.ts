import { User } from "@/models/user";
import { typeUser } from "@/types/users";

export const createUser = async (user: typeUser) => {
  const newUser = await User.create(user);
  return newUser;
};
