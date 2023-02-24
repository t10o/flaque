import clsx from "clsx";
import { Rampart_One } from "next/font/google";
import Link from "next/link";

import { MENUS } from "@/constants/menus";

const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

export const Header = (): JSX.Element => {
  const headerMenu = () => {
    return MENUS.filter((menu) => {
      return menu.name !== "privacy";
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
        "mt-4",
        `${rampartOne.className}`
      )}
    >
      <Link href="/">
        <h1 className={clsx("text-4xl")}>flaque</h1>
      </Link>

      <div className={clsx("lg:flex", "items-center", "hidden")}>
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
