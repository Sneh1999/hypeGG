import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Nunito } from "@next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const activeChain = ChainId.FantomTestnet;

const nunito = Nunito({
  subsets: ["latin"],
  // weight: ["300", "400", "700", "900"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
          <ThirdwebProvider desiredChainId={activeChain}>
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
          </ThirdwebProvider>
    </main>
  );
}