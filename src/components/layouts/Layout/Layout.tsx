import clsx from "clsx";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

import { Menu } from "@/components/elements";
import { Footer, Header } from "@/components/layouts";
import * as gtag from "@/lib/gtag";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleChangeRoute);

    return () => {
      router.events.off("routeChangeComplete", handleChangeRoute);
    };
  }, [router.events]);

  const handleChangeRoute = (path: any) => {
    gtag.pageview(path);
  };

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

      <main>{children}</main>

      <Footer />
    </>
  );
};

Layout.displayName = "Layout";
