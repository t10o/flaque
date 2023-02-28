import clsx from "clsx";
import { ReactNode } from "react";

import { useLayout } from "@/hooks";

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props): JSX.Element => {
  const currentPageTitle = useLayout();

  return (
    <main>
      {currentPageTitle && (
        <div className={clsx("my-20", "text-3xl", "text-center")}>
          {currentPageTitle}
        </div>
      )}

      <div className={clsx("mt-20")}>{children}</div>
    </main>
  );
};

Main.displayName = "Main";
