import { useCreateHypeStore } from "@/stores/CreateHypeStore";
import React from "react";

const ReviewHypeForm = () => {
  const createHypeStore = useCreateHypeStore();
  return (
    <div className="mx-auto mt-20 flex items-center justify-center gap-20">
      <div className="flex-col">
        <h1 className="text-3xl font-extrabold text-[#7165FF]">
          Review HypeGG
        </h1>
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
            {/* <img src={createHypeStore.image} className="h-32 w-32" alt="dsf" /> */}
          </div>

          <span className="text-center">Created via hypeGG</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewHypeForm;
