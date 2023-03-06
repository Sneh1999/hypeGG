import { HypeForm } from "@/constants/constants";
import { useCreateHypeStore } from "@/stores/CreateHypeStore";
import React from "react";

const ReviewHypeForm = () => {
  const createHypeStore = useCreateHypeStore();
  return (
    <div className="mx-auto mt-20 flex items-center justify-center gap-20">
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
            onClick={() => {}}
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
