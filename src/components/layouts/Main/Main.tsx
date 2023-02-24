import clsx from "clsx";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";

import { LayoutState } from "@/stores/layout";

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props): JSX.Element => {
  const currentPage = useRecoilValue(LayoutState);

  return (
    <main>
      {currentPage.name && (
        <div className={clsx("mt-20", "text-3xl", "text-center")}>
          {currentPage.name}
        </div>
      )}

      <div className={clsx(!currentPage.name && "mt-20")}>{children}</div>
    </main>
  );
};

Main.displayName = "Main";
