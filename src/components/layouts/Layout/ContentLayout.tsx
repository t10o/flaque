import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  pageTitle?: string;
}

export const ContentLayout = ({ children, pageTitle }: Props): JSX.Element => {
  return (
    <>
      {pageTitle && (
        <div className={clsx("my-20", "text-3xl", "text-center")}>
          {pageTitle}
        </div>
      )}

      <div className={clsx("mt-20")}>{children}</div>
    </>
  );
};

ContentLayout.displayName = "Main";
