import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";

import { useMenu } from "@/hooks/use-menu";

interface Props {
  onClick: () => void;
}

export const Header = ({ onClick }: Props): JSX.Element => {
  const { headerMenu } = useMenu();

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

      <button className={clsx("lg:hidden")} aria-label="Menu" onClick={onClick}>
        <FontAwesomeIcon className={clsx("text-lg")} icon={faBars} />
      </button>

      <div className={clsx("lg:flex", "items-center", "hidden", "text-center")}>
        {headerMenu.map((menu) => {
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
