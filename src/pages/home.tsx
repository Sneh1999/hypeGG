import { ChevronRightIcon } from "@heroicons/react/24/outline";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl sm:pb-32 flex md:flex-row flex-col-reverse justify-between lg:gap-x-6 lg:px-8">
            <div className="px-6 lg:px-0 lg:pt-4 max-w-lg">
              <h1 className="mt-24 text-3xl font-extrabold tracking-wider text-gray-900 sm:text-[2.6rem] leading-[3rem]">
                MINT YOUR MEMORIES AS DIGITAL MEMENTOS <br />
                WITH <span className="text-[#7165FF] ">hypeGG</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Diam libero blandit
                aliquaus eu molestie.
              </p>
              <div className="mt-4 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-xl bg-gradient-to-b from-[#6B8BFC] to-[#867DEC] px-3.5 py-1.5 text-md font-bold leading-7 text-white shadow-sm hover:bg-gradient-to-t hover:text-black from-[#6B8BFC] to-[#867DEC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-gradient-to-tr"
                >
                  Mint Hype
                </a>
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
    </>
  );
}
