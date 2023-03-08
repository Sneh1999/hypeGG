import React from "react";
import { ThirdwebNftMedia, Web3Button } from "@thirdweb-dev/react";
import { contractAddress } from "@/constants/constants";

const NFT = ({ nft }) => {
    return(
        <div className="flex flex-col items-center sm:items-center sm:flex-row bg-white rounded-lg drop-shadow-2xl hover:drop-shadow-lg overflow-hidden p-2 my-10">
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
        <div
        className="flex items-center justify-center flex-col"
        >
        </div>
          <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
          className="w-8 mt-4 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] text-white hover:opacity-70"
          >Claim
        </Web3Button>
      </div>
    )
}

export default NFT