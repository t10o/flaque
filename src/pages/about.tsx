import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { About } from "@/features/about";

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

      <About />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default AboutPage;
