import FAQ from "@/components/FAQ";
import Intro from "@/components/Intro";
import Usage from "@/components/Usage";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col-reverse justify-between sm:pb-32 md:flex-row lg:gap-x-6 lg:px-8">
            <div className="max-w-lg px-6 lg:px-0 lg:pt-4">
              <h1 className="mt-24 text-xl font-bold leading-[3rem] tracking-wider text-gray-900 sm:text-[2.6rem]">
                MINT YOUR MEMORIES AS DIGITAL MEMENTOS <br />
                WITH <span className="text-[#7165FF] ">hypeGG</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
                Create collections and distribute soulbound NFTs to your beloved
                users
              </p>
              <div className="mt-4 flex items-center gap-x-6">
                <Link
                  href="/createHype"
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="text-md rounded-xl bg-gradient-to-b from-[#6B8BFC] to-[#867DEC] px-3.5 py-1.5 font-bold leading-7 text-white shadow-sm hover:bg-gradient-to-t hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Mint Hype
                </Link>
              </div>
            </div>
            <img
              src="./memories.svg"
              alt="memories"
              className="h-[20rem] md:h-[35rem]"
            />
          </div>
        </div>
      </div>
      <Usage />
      <FAQ />
      <Intro />
    </>
  );
}
