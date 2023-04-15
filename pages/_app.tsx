import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Utility for conversion between roman and arabic numerals."
        />
        <meta
          name="keywords"
          content="roman, arabic, numerals, conversion, numeri, thepmsquare, parth"
        />
        <meta
          name="google-site-verification"
          content="FwX_gOF89TmJvAE6nFZ7DrpRMHTQBTs_0XsuK6xPMyU"
        />
        <title>numeri</title>
        <link rel="icon" href="/numeri/favicon.ico" />
        <link rel="manifest" href="/numeri/manifest.json" />
        <meta name="theme-color" content="#ffb300" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
