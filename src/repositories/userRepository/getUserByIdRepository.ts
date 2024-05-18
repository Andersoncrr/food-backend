import { ToppingCategory } from '@/models/toppingCategory';
import { User } from '@/models/user';

export const getUserByIdRepository = async (idUser: string) => {
    const user = await User.findById(idUser);
    return user;
};
