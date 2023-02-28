import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { Contact } from "@/features/contact";

export const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Contact | flaque"
        description="flaqueの運営へのお問い合わせページ"
        openGraph={{
          title: "Contact | flaque",
          description: "flaqueの運営へのお問い合わせページ",
          url: "https://flaque.t10o.one/contact",
        }}
      />

      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default ContactPage;
