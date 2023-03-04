import { Inter } from "@next/font/google";
import Home from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <main>
        <Home />
      </main>
    </>
  );
}
