import { GetStaticProps, NextPage } from "next";
import { Profile } from "src/features/profile";

import { ContentLayout } from "@/components/layouts";

export const Home: NextPage = () => {
  return (
    <ContentLayout>
      <Profile />
    </ContentLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Home;
