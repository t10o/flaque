import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProfileCard = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "lg:flex-row",
        "lg:justify-start",
        "lg:items-start",
        "col-span-1",
        "py-10",
        "px-10",
        "max-w-2xl",
        "lg:max-w-4xl",
        "mx-auto",
        "shadow-up",
        "rounded-lg"
      )}
    >
      {children}
    </div>
  );
};
