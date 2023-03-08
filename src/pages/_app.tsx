// import Layout from "@/components/Layout";
// import "@/styles/globals.css";
// import "@rainbow-me/rainbowkit/styles.css";
// import type { AppProps } from "next/app";
// import { Nunito } from "@next/font/google";

// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { fantomTestnet } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const { chains, provider } = configureChains(
//   [fantomTestnet],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: "hypeGG",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

// const nunito = Nunito({
//   subsets: ["latin"],
//   // weight: ["300", "400", "700", "900"]
// });

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <main className={nunito.className}>
//       <WagmiConfig client={wagmiClient}>
//         <RainbowKitProvider chains={chains}>
//           <Layout>
//             <ToastContainer />
//             <Component {...pageProps} />
//           </Layout>
//         </RainbowKitProvider>
//       </WagmiConfig>
//     </main>
//   );
// }

// import Layout from "@/components/Layout";
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
// } from "@rainbow-me/rainbowkit";
// import "@/styles/globals.css";
// import "@rainbow-me/rainbowkit/styles.css";
// import { ChainId, ThirdwebSDKProvider } from "@thirdweb-dev/react";
// import type { AppProps } from "next/app";
// import { fantomTestnet } from "wagmi/chains"
// import {
//   configureChains,
//   createClient,
//   useSigner,
//   WagmiConfig,
// } from "wagmi";
// import { Nunito } from "@next/font/google";
// import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import "../styles/globals.css";

// const { chains, provider } = configureChains(
//   [fantomTestnet],
//   [
//     jsonRpcProvider({
//       rpc: (chain) =>
//         chain.id === ChainId.FantomTestnet
//           ? {
//               http: `https://fantom-testnet.rpc.thirdweb.com`,
//             }
//           : null,
//     }),
//   ]
// );

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

// const nunito = Nunito({
//   subsets: ["latin"],
//   // weight: ["300", "400", "700", "900"]
// });

// function ThirdwebProvider({
//   wagmiClient,
//   children,
// }: {
//   wagmiClient: any;
//   children: React.ReactNode;
// }) {
//   const { data: signer } = useSigner();

//   return (
//     <ThirdwebSDKProvider
//       activeChain={ChainId.FantomTestnet}
//       signer={signer as any}
//       queryClient={wagmiClient.queryClient as any}
//     >
//       {children}
//     </ThirdwebSDKProvider>
//   );
// }

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <main className={nunito.className}>
//     <WagmiConfig client={wagmiClient}>
//       <RainbowKitProvider chains={chains}>
//         <ThirdwebProvider wagmiClient={wagmiClient}>
//         <Layout>
//             <ToastContainer />
//             <Component {...pageProps} />
//           </Layout>
//         </ThirdwebProvider>
//       </RainbowKitProvider>
//     </WagmiConfig>
//     </main>
//   );
// }

// export default MyApp;

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