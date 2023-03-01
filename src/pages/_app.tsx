import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { fantomTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [fantomTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "hypeGG",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const nunito = Nunito({
  subsets: ['latin'],
  // weight: ["300", "400", "700", "900"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
    </main>
  );
}
