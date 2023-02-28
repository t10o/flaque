import { MENUS } from "@/constants/menus";

export const useMenu = () => {
  const headerMenu = MENUS.filter((menu) => {
    return menu.name !== "Privacy";
  });

  return { headerMenu };
};
