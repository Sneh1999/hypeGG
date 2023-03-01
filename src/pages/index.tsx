import Usage from "@/components/Usage";
import { Inter } from "@next/font/google";
import Home from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <main>
        <Home />
        <Usage />
      </main>
    </>
  );
}
