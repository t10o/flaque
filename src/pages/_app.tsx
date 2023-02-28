import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Noto_Sans_Javanese } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

import { Layout } from "@/components/layouts";
import * as gtag from "@/lib/gtag";

const notoSansJapanese = Noto_Sans_Javanese({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_ENDPOINT,
  });

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

      <ApolloProvider client={client}>
        <style jsx global>{`
          html {
            font-family: ${notoSansJapanese.style.fontFamily};
          }
        `}</style>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>

      <Analytics />
    </>
  );
}
