import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Profile } from "src/features/profile";

import { ContentLayout } from "@/components/layouts";

export const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About | flaque"
        description="flaqueの運営の自己紹介"
        openGraph={{
          title: "About | flaque",
          description: "flaqueの運営の自己紹介",
          url: "https://flaque.t10o.one/about",
        }}
      />

      <ContentLayout pageTitle="About">
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

export default AboutPage;
