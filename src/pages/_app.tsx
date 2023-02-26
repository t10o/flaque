import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from "next/app";
import { Noto_Sans_Javanese } from "next/font/google";
import { RecoilRoot } from "recoil";

import { Layout } from "@/components/layouts";

const notoSansJapanese = Noto_Sans_Javanese({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_ENDPOINT,
  });

  return (
    <>
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
