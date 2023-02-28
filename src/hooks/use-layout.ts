import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { MENUS } from "@/constants/menus";

export const useLayout = () => {
  const [currentPageTitle, setCurrentPageTitle] = useState("");

  const router = useRouter();

  useEffect(() => {
    handleChangeRoute(router.pathname);
  });

  useEffect(() => {
    router.events.on("routeChangeComplete", handleChangeRoute);

    return () => {
      router.events.off("routeChangeComplete", handleChangeRoute);
    };
  }, [router.events]);

  const handleChangeRoute = (path: string) => {
    const currentPage = MENUS.filter((menu) => {
      return menu.href === path;
    });

    const currentPageTitle = currentPage[0] ? currentPage[0].name : "";

    setCurrentPageTitle(currentPageTitle);
  };

  return currentPageTitle;
};
