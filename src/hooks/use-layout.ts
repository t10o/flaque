import { useRouter } from "next/router";

import { MENUS } from "@/constants/menus";

export const useLayout = () => {
  const router = useRouter();

  const currentPagePath = router.pathname;

  const currentPage = MENUS.filter((menu) => {
    return menu.href === currentPagePath;
  });

  const currentPageTitle = currentPage[0] ? currentPage[0].name : "";

  return { currentPageTitle };
};
