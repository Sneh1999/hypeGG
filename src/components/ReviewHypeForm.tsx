import { HypeForm } from "@/constants/constants";
import { useCreateHypeStore } from "@/stores/CreateHypeStore";
import {
  useContract,
  useContractRead,
  useLazyMint,
  useSetClaimConditions,
} from "@thirdweb-dev/react";
import { contractAddress } from "../constants/constants";
import React from "react";
import { toast } from "react-toastify";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";

const ReviewHypeForm = () => {
  const createHypeStore = useCreateHypeStore();
  const { contract } = useContract(contractAddress);
  const { data } = useContractRead(contract, "nextTokenIdToMint");
  const tokenId = 0;
  console.log(tokenId);
  console.log(contract);
  const { mutateAsync: lazyMint } = useLazyMint(contract);
  const { mutateAsync: setClaimConditions } = useSetClaimConditions(
    contract,
    tokenId
  );

  const handleMintButton = async (): Promise<void> => {
    try {
      // await lazyMint({
      //   metadatas: [
      //     {
      //       name: createHypeStore.collection,
      //       description: createHypeStore.community,
      //       image: createHypeStore.image,
      //     },
      //   ],
      // });
      const addresses = [];
      for (let i = 1; i < createHypeStore.addresses.length; i++) {
        addresses.push({
          address: createHypeStore.addresses[i],
          maxClaimable: 1,
        });
      }
      console.log(addresses);
      await setClaimConditions({
        phases: [
          {
            metadata: {
              name: "Claim Phase",
            },
            currencyAddress: NATIVE_TOKEN_ADDRESS,
            price: 0,
            maxClaimablePerWallet: 0,
            maxClaimableSupply: 1000,
            startTime: new Date(),
            waitInSeconds: 60 * 60 * 24 * 7,
            snapshot: addresses,
          },
        ],
      });
      toast.success("Hype Created Successfully!!!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to Mint!");
    }
  };

  return (
    <div className="mx-auto mt-20 flex flex-col-reverse items-center justify-center gap-10 md:flex-row">
      <div className="mr-10 flex flex-col">
        <h1 className="text-3xl font-extrabold text-[#7165FF]">
          Review HypeGG
        </h1>
        <div className=" mt-5 flex flex-col gap-4 border-l-8 border-[#6B8BFC] px-4 py-2">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Headline</h2>
            <h2>{createHypeStore.collection}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Community</h2>
            <h2>{createHypeStore.community}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Created By</h2>
            <h2>HypeGG</h2>
          </div>
        </div>
        <div className="mt-5 flex justify-between">
          <button
            className=" float-right mt-4 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] px-5 py-3 text-white hover:opacity-70"
            onClick={() => createHypeStore.setForm(HypeForm.DISTRIBUTE_HYPE)}
          >
            Back
          </button>
          {/* TODO CONNECT AND MINT */}
          <button
            className=" float-right mt-4 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] px-5 py-3 text-white hover:opacity-70"
            onClick={handleMintButton}
          >
            Mint
          </button>
        </div>
      </div>
      <div className="relative min-h-[18rem] w-96 skew-x-6">
        <div className="absolute flex min-h-[18rem] w-96 flex-col rounded-xl  bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] py-2 px-4 text-white shadow-[inset_1px_4px_6px_2px_rgba(0,0,0,0.3)]" />
        <div className="absolute left-4 -top-4 flex min-h-[18rem] w-96 flex-col gap-10 rounded-xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] py-2 px-4 text-white shadow-[inset_1px_4px_6px_2px_rgba(0,0,0,0.3)]">
          <h1 className="text-lg font-extrabold">
            {createHypeStore.collection}
          </h1>

          <div className="flex items-center justify-center">
            {/* TODO SHOW IMAGE BASED ON IPFS */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={createHypeStore.image} className="h-32 w-32" alt="dsf" />
          </div>

          <span className="text-center">Created via hypeGG</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewHypeForm;
