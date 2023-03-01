import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { ContentLayout } from "@/components/layouts";
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

      <ContentLayout pageTitle="Privacy">
        <Privacy />
      </ContentLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default PrivacyPage;
