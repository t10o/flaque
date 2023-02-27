import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Noto_Sans_Javanese } from "next/font/google";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

import { Layout } from "@/components/layouts";

const notoSansJapanese = Noto_Sans_Javanese({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    headers: {
      authorization: ` Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
    uri: process.env.NEXT_PUBLIC_ENDPOINT,
  });

  return (
    <>
      <Head>
        <title>Flaque</title>
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

        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ApolloProvider>

      <Analytics />
    </>
  );
}
