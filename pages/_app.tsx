import Head from "next/head";
import { AppProps } from "next/app";
// Client-side cache, shared for the whole session of the user in the browser.
import "@/styles/global.scss";
import { useRouter } from "next/router";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { LayoutAdmin } from "@/admin/components/layout/layout";
import { LayoutBasic } from "@/components/Layout";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});
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

      {router.pathname?.includes("admin") ? (
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <LayoutAdmin>
              <Component {...pageProps} />
            </LayoutAdmin>
          </NextUIProvider>
        </NextThemesProvider>
      ) : (
        <LayoutBasic>
          <Component {...pageProps} />
        </LayoutBasic>
      )}
    </div>
  );
}
