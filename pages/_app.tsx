import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { useRouter } from 'next/router';
import React from 'react';
import { defaultLocale } from "../locale/constants";


export const Locale = React.createContext<string | undefined>(defaultLocale);

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const { locale } = router;

  return (
    <Locale.Provider value={locale}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Locale.Provider>
  );
}

export default MyApp;
