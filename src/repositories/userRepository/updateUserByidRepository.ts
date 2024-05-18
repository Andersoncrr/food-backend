import { ToppingCategory } from '@/models/toppingCategory';
import { User } from '@/models/user';
import { typeToppingCategory } from '@/types/toppingCategory';
import { typeUser } from '@/types/user';

export const updateUserByidRepository = async (userData: typeUser) => {
    const user = await User.findByIdAndUpdate(userData._id, userData, {
        new: true,
    });
    return user;
};
