import Layout from "@/layout";
import ShoppingCartProvider from "@/providers/ShoppingCartProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  );
}
