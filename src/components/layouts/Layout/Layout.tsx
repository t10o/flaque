import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";

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

  return (
    <>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

Layout.displayName = "Layout";
