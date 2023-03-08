import Loader from "@/components/Loader";
import NFT from "@/components/NFT";
import { contractAddress } from "@/constants/constants";
import { PhotoIcon } from "@heroicons/react/24/outline";
import {
  useAddress,
  useClaimerProofs,
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import { useState } from "react";

const ClaimHype = () => {
  const { contract } = useContract(contractAddress);
  const [allNull, setAllNull] = useState(true);
  const { data: nfts, isLoading } = useNFTs(contract, {
    start: 0,
    count: 100,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto mt-10  flex flex-col items-center justify-center gap-10 px-10 md:gap-1">
      <div className="flex-col">
        <h1 className="text-3xl font-extrabold text-[#7165FF]">Claim HypeGG</h1>
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
            return (
              <NFT nft={nft} key={nft.metadata.id} setAllNull={setAllNull} />
            );
          })}
        {allNull && (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-10 px-20">
            <PhotoIcon className="h-10 w-10 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              No Claimable NFTs
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              You have no NFTs left to claim.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimHype;
