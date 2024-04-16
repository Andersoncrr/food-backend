import { MenuCategory } from "@/models/menuCategory";

export const getMenuCategory = async (idMenuCategory: string) => {
  const menuCategory = await MenuCategory.findById(idMenuCategory);
  return menuCategory;
};
