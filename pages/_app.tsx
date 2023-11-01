import Head from "next/head";
import { AppProps } from "next/app";
// Client-side cache, shared for the whole session of the user in the browser.
import "@/styles/global.scss";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { useRouter } from "next/router";
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>BED Profile | Be Duong</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" type="image/x-icon" href={"/icons/ready-to-go.png"} />
      </Head>
      {!router.pathname?.includes('admin') && <Header />}
      <Component {...pageProps} />
      {!router.pathname?.includes('admin') && <Footer />}
    </div>
  );
}
