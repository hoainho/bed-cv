import Head from "next/head";
import { AppProps } from "next/app";
// Client-side cache, shared for the whole session of the user in the browser.
import "@/styles/global.scss";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>BED CV | Be Duong</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
