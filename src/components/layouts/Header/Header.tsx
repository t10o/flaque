import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Rampart_One } from "next/font/google";
import Link from "next/link";

const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

export const Header = (): JSX.Element => {
  return (
    <header
      className={clsx(
        "flex",
        "items-center",
        "justify-between",
        "h-14",
        "px-4"
      )}
    >
      <Link href="/">
        <h1 className={clsx(`${rampartOne.className}`, "text-4xl")}>flaque</h1>
      </Link>

      <FontAwesomeIcon icon={faBars} />
    </header>
  );
};

Header.displayName = "Header";
