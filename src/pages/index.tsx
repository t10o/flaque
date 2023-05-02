import { GetStaticProps, NextPage } from "next";

import { ContentLayout } from "@/components/layouts";
import { About } from "@/features/about";

export const Home: NextPage = () => {
  return (
    <ContentLayout>
      <About />
    </ContentLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Home;
