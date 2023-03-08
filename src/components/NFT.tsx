import React from "react";
import Image from "next/image";
import Nft from "../../public/Nft.png";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";

const NFT = ({ nft }) => {
  return (
    <div className="my-10 flex flex-col items-center overflow-hidden rounded-lg bg-white p-2 drop-shadow-2xl hover:drop-shadow-lg sm:flex-row sm:items-center">
      <div className="flex">
        <div className="flex flex-col justify-between px-4">
          <h2 className="text-xl font-bold">Headline</h2>
          <p className="text-gray-500">Community</p>
          <p className="mt-2 text-sm font-medium text-gray-900">Created By: </p>
        </div>
        <div className="flex flex-col justify-between px-4">
          <h2 className="text-xl font-bold">{nft.name}</h2>
          <p className="text-gray-500">{nft.description}</p>
          <p className="mt-2 text-sm font-medium text-gray-900">hypeGG</p>
        </div>
      </div>
      <div className="">
        {/* <Image src={Nft} width={350} height={350} alt="NFT" /> */}
        <ThirdwebNftMedia metadata={nft.metadata} />
      </div>
      <div className="flex flex-col items-center justify-center"></div>
      <button className="mt-4 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] px-5 py-3 text-white hover:opacity-70">
        Claim
      </button>
    </div>
  );
};

export default NFT;
