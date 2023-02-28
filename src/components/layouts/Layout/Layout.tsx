import clsx from "clsx";
import { ReactNode, useState } from "react";

import { Menu } from "@/components/elements";
import { Footer, Header, Main } from "@/components/layouts";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
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
