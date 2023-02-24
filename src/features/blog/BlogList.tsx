import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const BlogList = ({ children }: Props): JSX.Element => {
  return (
    <div
      className={clsx(
        "grid",
        "lg:grid-cols-3",
        "md:grid-cols-2",
        "sm:grid-cols-1",
        "gap-4",
        "px-4",
        "max-w-7xl",
        "mx-auto",
        "auto-rows-[minmax(11rem,max-content)]"
      )}
    >
      {children}
    </div>
  );
};

BlogList.displayName = "BlogList";
