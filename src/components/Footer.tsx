import React from "react";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center mt-40 px-4 justify-between border-t-2 py-2">
      <div className="flex justify-center items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-12 md:h-24 w-auto lg:block"
          src="/logo.svg"
          alt="hypeGG"
        />
        <div className="text-sm text-[#020B1AC7]">Copyright © 2022</div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] w-8 h-8 md:h-11 md:w-11">
          <IoLogoTwitter className="text-white h-4 w-4 md:h-6 md:w-6" />
        </div>
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] w-8 h-8 md:h-11 md:w-11">
          <IoLogoGithub className="text-white h-4 w-4 md:h-6 md:w-6" />
        </div>
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] w-8 h-8 md:h-11 md:w-11">
          <FaDiscord className="text-white h-4 w-4 md:h-6 md:w-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
