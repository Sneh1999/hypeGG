/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white drop-shadow-[0_15px_15px_rgba(0,0,0,0.1)]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 sm:items-stretch sm:justify-between ">
                <div className="flex shrink-0 items-center">
                  <img
                    className="hidden h-24 w-auto lg:block"
                    src="/logo.svg"
                    alt="hypeGG"
                  />
                </div>
                <div className="hidden items-center justify-center sm:ml-6 sm:flex sm:space-x-24">
                  <Link
                    href="/home"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-bold text-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    href="/home#faq"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-bold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    <button>FAQ</button>
                  </Link>
                  <Link
                    href="/createHype"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-bold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Create Hype
                  </Link>
                  <Link
                    href="/claimHype"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-bold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Claim Hype
                  </Link>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0 md:ml-52">
                {/* <ConnectButton /> */}
                <ConnectWallet />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                FAQ
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Mint Hype
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
