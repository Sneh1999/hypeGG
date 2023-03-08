import { contractAddress } from "@/constants/constants";
import {
  ThirdwebNftMedia,
  useAddress,
  useClaimerProofs,
  useContract,
  useContractRead,
  Web3Button,
} from "@thirdweb-dev/react";
import { NFT, SmartContract } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

const NFT = ({
  nft,
  setAllNull,
}: {
  nft: NFT;
  setAllNull: SetStateAction<Dispatch<boolean>>;
}) => {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data: claimableNFTs } = useClaimerProofs(
    contract,
    address!,
    nft.metadata.id
  );

  const { data: claimedNFTsData } = useContractRead(
    contract,
    "getSupplyClaimedByWallet",
    nft.metadata.id,
    address
  );

  const handleClaim = async (contract: SmartContract<ethers.BaseContract>) => {
    await contract.erc1155.claim(nft.metadata.id, 1);
    toast.success("Claim successful!");
  };

  const claimedNFTsNum = claimedNFTsData ? Number(claimedNFTsData) : 0;

  if (claimableNFTs && Number(claimableNFTs.maxClaimable) > claimedNFTsNum) {
    setAllNull(false);

    return (
      <div className="my-10 flex flex-col items-center overflow-hidden rounded-lg bg-white p-2 drop-shadow-2xl hover:drop-shadow-lg sm:flex-row sm:items-center">
        <div className="flex">
          <div className="flex flex-col justify-between px-4">
            <h2 className="text-xl font-bold">Headline</h2>
            <p className="text-gray-500">Community</p>
            <p className="mt-2 text-sm font-medium text-gray-900">
              Created By:{" "}
            </p>
          </div>
          <div className="flex flex-col justify-between px-4">
            <h2 className="text-xl font-bold">{nft.metadata.name}</h2>
            <p className="text-gray-500">{nft.metadata.description}</p>
            <p className="mt-2 text-sm font-medium text-gray-900">hypeGG</p>
          </div>
        </div>
        <div className="">
          <ThirdwebNftMedia metadata={nft.metadata} />
        </div>
        <div className="flex flex-col items-center justify-center"></div>
        <Web3Button
          contractAddress={contractAddress}
          action={handleClaim}
          className="mt-4 w-8 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] text-white hover:opacity-70"
        >
          Claim
        </Web3Button>
      </div>
    );
  }

  return null;
};

export default NFT;
