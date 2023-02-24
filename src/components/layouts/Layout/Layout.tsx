import { ReactNode } from "react";

import { Footer, Header } from "@/components/layouts";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

Layout.displayName = "Layout";
