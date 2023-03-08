import React from "react";
import Image from "next/image";
import headingImage from "../../public/headingImage.png";
import sendHype from "../../public/sendHype.png";
import distribute from "../../public/distribute.png";
import review from "../../public/review.png";

const Usage = () => {
  return (
    <div>
      <div className="flex items-center justify-center font-extrabold">
        <Image src={headingImage} width={70} height={50} alt="heading Image" />
        <h1 className="py-10 text-3xl text-[#7165FF]">How it Works</h1>
      </div>
      <div className="flex items-center justify-start px-2 py-10 sm:pl-20">
        <div className="flex flex-col items-center rounded-3xl border-l-8 border-[#FF6581] bg-[#7367FF] py-10 sm:w-7/12 sm:flex-row sm:items-start sm:px-4 md:w-6/12">
          <div className="w-11/12 text-white">
            <h1 className="py-3 text-xl font-bold sm:text-2xl">Send HypeGG</h1>
            <p className="pb-7">
              Create a collection of Soulbound NFTs and upload an image that
              represents the soulbound NFT
            </p>
          </div>
          <div>
            <Image src={sendHype} width={295} height={320} alt="Sending Hype" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end px-2 py-10 sm:pr-20">
        <div className="flex flex-col items-center rounded-3xl border-r-8 border-[#7367FF] bg-[#FF6581] py-10 sm:w-7/12 sm:flex-row sm:items-start sm:px-4 md:w-6/12">
          <div className="w-11/12 text-white">
            <h1 className="py-3 text-xl font-bold sm:text-2xl">
              Distribute HypeGG
            </h1>
            <p className="pb-7">
              Upload a CSV containing all the addresses to whom you would like
              to distribute the NFTs
            </p>
          </div>
          <div>
            <Image
              src={distribute}
              width={295}
              height={320}
              alt="Sending Hype"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start px-2 py-10 sm:pl-20">
        <div className="flex flex-col items-center rounded-3xl border-l-8 border-[#FF6581] bg-[#7367FF] py-10 sm:w-7/12 sm:flex-row sm:items-start sm:px-4 md:w-6/12">
          <div className="w-11/12 text-white">
            <h1 className="py-3 text-xl font-bold sm:text-2xl">
              Review HypeGG
            </h1>
            <p className="pb-7">
              Review all the details and Lazy mint the collection
            </p>
          </div>
          <div>
            <Image src={review} width={295} height={320} alt="Sending Hype" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
