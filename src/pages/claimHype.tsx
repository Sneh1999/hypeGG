import NFT from "@/components/NFT";
import React from "react";

const ClaimHype = () => {
  return (
    <div className="mx-auto mt-10  flex flex-col items-center justify-center gap-10 px-10 md:gap-1">
      <div className="flex-col">
        <h1 className="text-3xl font-extrabold text-[#7165FF]">
          Distribute HypeGG
        </h1>
        <h3 className="pt-2  text-center text-base font-medium text-[#00000080]">
          Claim your hypeGG NFT
        </h3>
      </div>
      <div className="flex items-center justify-around flex-wrap">
     <NFT />
     <NFT />
     <NFT />
      </div>
    </div>
  );
};

export default ClaimHype;
