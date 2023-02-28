import clsx from "clsx";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { Menu } from "@/components/elements";
import { Footer, Header, Main } from "@/components/layouts";
import { MENUS } from "@/constants/menus";
import { LayoutState } from "@/stores/layout";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter();
  const [_, setLayoutState] = useRecoilState(LayoutState);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleChangeRoute);

    return () => {
      router.events.off("routeChangeComplete", handleChangeRoute);
    };
  }, []);

  const handleChangeRoute = (path: string) => {
    const currentPage = MENUS.filter((menu) => {
      return menu.href === path;
    });

    const currentPageTitle = currentPage[0] ? currentPage[0].name : "";

    setLayoutState({ name: currentPageTitle });
  };

  const [isOpen, setIsOpen] = useState(false);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const onMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const onMenuClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu
        className={clsx("top-0", "bg-main")}
        right
        isOpen={isOpen}
        burgerButtonClassName={clsx("hidden")}
        overlayClassName={clsx("top-0")}
        itemListClassName={clsx("m-4")}
        onClick={onMenuClick}
        onOpen={onMenuOpen}
        onClose={onMenuClose}
      />

      <Header onClick={onMenuClick} />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

Layout.displayName = "Layout";
