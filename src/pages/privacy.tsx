import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { Privacy } from "@/features/privacy";

export const PrivacyPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Privacy | flaque"
        description="flaqueのプライバシーポリシー"
        openGraph={{
          title: "Privacy | flaque",
          description: "flaqueのプライバシーポリシー",
          url: "https://flaque.t10o.one/privacy",
        }}
      />

      <Privacy />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default PrivacyPage;
