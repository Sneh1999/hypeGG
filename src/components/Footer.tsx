import React from "react";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-40 flex items-center justify-between border-t-2 px-4 py-2 sticky top-full">
      <div className="flex items-center justify-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-12 w-auto md:h-24 lg:block"
          src="/logo.svg"
          alt="hypeGG"
        />
        <div className="text-sm text-[#020B1AC7]">Copyright © 2022</div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] md:h-11 md:w-11">
          <a 
          href="https://twitter.com/KhanAbbas201"
          target={"_blank"}
          >
          <IoLogoTwitter className="h-4 w-4 text-white md:h-6 md:w-6" />
          </a>
        </div>
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] md:h-11 md:w-11">
          <a 
          href="https://github.com/Sneh1999/hypeGG"
          target={"_blank"}
          >
          <IoLogoGithub className="h-4 w-4 text-white md:h-6 md:w-6" />
          </a>
        </div>
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] md:h-11 md:w-11">
          <FaDiscord className="h-4 w-4 text-white md:h-6 md:w-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
