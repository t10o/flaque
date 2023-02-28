import { NextPage } from "next";
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

export default PrivacyPage;
