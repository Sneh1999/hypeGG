import { ChevronRightIcon } from "@heroicons/react/24/outline";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl sm:pb-32 flex md:flex-row flex-col-reverse justify-between  lg:gap-x-6 lg:px-8">
            <div className="px-6 lg:px-0 lg:pt-4 max-w-lg">
              <h1 className="mt-24 text-3xl font-semibold  tracking-wider text-gray-900 sm:text-4xl">
                MINT YOUR MEMORIES AS DIGITAL MEMENTOS <br />
                WITH hypeGG
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Diam libero blandit
                aliquaus eu molestie .
              </p>
              <div className="mt-4 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-b from-[#6B8BFC] to-[#867DEC] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-gradient-to-tr"
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
