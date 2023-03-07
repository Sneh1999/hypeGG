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
      <div className="mx-2 mt-20 flex max-w-3xl  items-center justify-center rounded-3xl bg-gradient-to-r from-[#FF6581] to-[#FA878D] py-20 px-40 text-white md:mx-auto md:w-full">
        <div className=" mt-5 flex flex-col items-center  gap-4 px-4 py-2">
          <div className="flex justify-between gap-2">
            <h2 className="text-xl font-bold">Headline</h2>
            <h2>LearnWeb3</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Community</h2>
            <h2>Test</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Created By</h2>
            <h2>HypeGG</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimHype;
