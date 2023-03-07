import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createClient, WagmiConfig, useSigner, } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { fantomTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChainId, ThirdwebSDKProvider } from "@thirdweb-dev/react";

const { chains, provider } = configureChains(
  [fantomTestnet],
  [
    jsonRpcProvider({
      rpc: (chain) =>
        chain.id === ChainId.FantomTestnet
          ? {
              http: `https://fantom-testnet.rpc.thirdweb.com`,
            }
          : null,
    }),
  ]
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

function ThirdwebProvider({
  wagmiClient,
  children,
}: {
  wagmiClient: any;
  children: React.ReactNode;
}) {
  const { data: signer } = useSigner();

  return (
    <ThirdwebSDKProvider
      activeChain={ChainId.Mumbai}
      signer={signer as any}
      queryClient={wagmiClient.queryClient as any}
    >
      {children}
    </ThirdwebSDKProvider>
  );
}

const nunito = Nunito({
  subsets: ["latin"],
  // weight: ["300", "400", "700", "900"]
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
      <ThirdwebProvider
      wagmiClient={wagmiClient}
      >
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
      </ThirdwebProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  );
}