import React from "react";
import Image from "next/image";
import Nft from "../../public/Nft.png";

const NFT = () => {
    return(
        <div className="flex flex-col items-center sm:items-center sm:flex-row bg-white rounded-lg drop-shadow-2xl hover:drop-shadow-lg overflow-hidden p-2 my-10">
        <div className="flex">
        <div className="flex flex-col justify-between px-4">
          <h2 className="text-xl font-bold">Headline</h2>
          <p className="text-gray-500">Community</p>
          <p className="mt-2 text-sm font-medium text-gray-900">Created By: </p>
        </div>
        <div className="flex flex-col justify-between px-4">
          <h2 className="text-xl font-bold">Abbas Khan</h2>
          <p className="text-gray-500">LearnWeb3</p>
          <p className="mt-2 text-sm font-medium text-gray-900">Oxabbask.eth</p>
        </div>
        </div>
        <div className="">
          <Image src={Nft} width={350} height={350} alt="NFT" />
        </div>
        <div
        className="flex items-center justify-center flex-col"
        >
        </div>
        <button
        className="mt-4 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] px-5 py-3 text-white hover:opacity-70"
        >Claim</button>
      </div>
    )
}

export default NFT