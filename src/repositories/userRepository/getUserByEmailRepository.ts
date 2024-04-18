import { User } from '@/models/user';

export const getUserByEmailRepository = async (email: string) => {
    const user = await User.findOne({ email });
    return user;
};
