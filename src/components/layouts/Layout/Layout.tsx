import { ReactNode } from "react";

import { Footer, Header, Main } from "@/components/layouts";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

Layout.displayName = "Layout";
