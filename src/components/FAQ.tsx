import React from "react";
import Image from "next/image";
import faq from "../../public/faq.png";

const FAQ = () => {
  return (
    <div id="faq">
      <div className="flex items-center justify-center font-extrabold">
        <h1 className="text-[#7165FF] text-3xl py-10">FAQ</h1>
        <div className="mt-8">
          <Image src={faq} width={70} height={50} alt="faq image" />
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] rounded-3xl mx-2 md:w-1/2 md:mx-auto  shadow-lg text-white">
        <div className="px-20 py-10">
          <div className="p-4">
            + Which chain is this on? <br />
            HypeGG is on Fantom Testnet for now but will be available on the mainnet soon
          </div>
          <div className="p-4">
            + Are the NFTs transferrable? <br />
            No, HypeGG uses Soulbound tokens so that your minted collectibles stay associated to you forever.
          </div>
          <div className="p-4">
            + Why HypeGG? <br />
            HypeGG has a lot more to come, specific profiles for each user associated with their wallet, mobile app and a much more improved UI.
            <br />
            <a className="text-gray-800" target={"blank"} href="https://www.figma.com/file/idax47Gv6RE4ERJ51pKvU5/POT?node-id=0%3A1&t=pHSb4En660nYvHZP-0">Click here to see what the future looks like</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
