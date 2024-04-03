import { User } from "@/models/user";

export const getUser = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};
