import NFT from "@/components/NFT";
import React, { useEffect } from "react";
import {
  useContract,
  useNFTs,
  useAddress,
  useClaimerProofs,
} from "@thirdweb-dev/react";
import { contractAddress } from "@/constants/constants";

const ClaimHype = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data: nfts, isLoading } = useNFTs(contract, {
    start: 0,
    count: 100,
  });
  // instead of 0 as tokenId need to work with a loop to fetch all the tokens and perform conditional rendering in line 43
  const { data: claimableNFTs } = useClaimerProofs(contract, address!, 0);
  console.log(claimableNFTs, "come on")
  

  if(isLoading) {
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className="mx-auto mt-10  flex flex-col items-center justify-center gap-10 px-10 md:gap-1">
      <div className="flex-col">
        <h1 className="text-3xl font-extrabold text-[#7165FF]">
          Distribute HypeGG
        </h1>
        <h3 className="pt-2 text-center text-base font-medium text-[#00000080]">
          Claim your hypeGG NFT
        </h3>
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-around"></div>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        {nfts &&
          nfts?.map((nft) => {
            console.log(nft);
            return <NFT nft={nft} key={nft.metadata.id} />;
          })}
      </div>
    </div>
  );
};

export default ClaimHype;
