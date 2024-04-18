import { User } from '@/models/user';
import { typeUser } from '@/types/user';

export const createUserRepository = async (user: typeUser) => {
    const newUser = await User.create(user);
    return newUser;
};
