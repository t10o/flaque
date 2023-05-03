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
        "col-span-1",
        "py-10",
        "px-10",
        "max-w-4xl",
        "mx-auto",
        "shadow-up",
        "rounded-lg"
      )}
    >
      {children}
    </div>
  );
};
