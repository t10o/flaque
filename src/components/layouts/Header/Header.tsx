import clsx from "clsx";
import Link from "next/link";

import { MENUS } from "@/constants/menus";

export const Header = (): JSX.Element => {
  const headerMenu = () => {
    return MENUS.filter((menu) => {
      return menu.name !== "Privacy";
    });
  };

  return (
    <header
      className={clsx(
        "flex",
        "items-center",
        "justify-between",
        "h-14",
        "px-4",
        "mt-10"
      )}
    >
      <Link href="/">
        <span className={clsx("text-4xl")}>flaque</span>
      </Link>

      <div className={clsx("lg:flex", "items-center", "hidden", "text-center")}>
        {headerMenu().map((menu) => {
          return (
            <Link
              className={clsx("mx-4", "text-xl")}
              key={menu.name}
              href={menu.href}
            >
              {menu.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

Header.displayName = "Header";
