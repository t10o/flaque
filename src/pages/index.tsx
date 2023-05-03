import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Profile } from "src/features/profile";

import { ContentLayout } from "@/components/layouts";

export const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home | flaque"
        description="flaqueの運営のプロフィール"
        openGraph={{
          title: "Home | flaque",
          description: "flaqueの運営のプロフィール",
          url: "https://flaque.t10o.one",
        }}
      />

      <ContentLayout>
        <Profile />
      </ContentLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Home;
