import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Noto_Sans_Javanese } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-toastify";

import { Layout } from "@/components/layouts";
import * as gtag from "@/lib/gtag";

const notoSansJapanese = Noto_Sans_Javanese({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />

      <Head>
        <title>flaque</title>
      </Head>

      <DefaultSeo
        defaultTitle="flaque"
        description="flaqueのトップページ"
        openGraph={{
          title: "flaque",
          description: "flaqueのトップページ",
          site_name: "flaque",
          type: "website",
          url: "https://flaque.t10o.one",
        }}
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <style jsx global>{`
        html {
          font-family: ${notoSansJapanese.style.fontFamily};
        }
      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Analytics />
    </>
  );
}
