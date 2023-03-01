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
        <h1 className="text-[#7165FF] text-3xl py-10">How it Works</h1>
      </div>
      <div className="flex items-col items-center justify-start px-2 sm:pl-20 py-10">
        <div className="flex flex-col items-center sm:items-start sm:flex-row bg-[#7367FF] py-10 sm:w-7/12 md:w-6/12 rounded-3xl sm:px-4 border-l-8 border-[#FF6581]">
          <div className="w-11/12 text-white">
            <h1 className="text-xl sm:text-2xl font-bold py-3">Send HypeGG</h1>
            <p className="pb-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              culpa numquam consequuntur ipsum aut dicta ad suscipit, quaerat ea
              nostrum
            </p>
          </div>
          <div>
            <Image src={sendHype} width={295} height={320} alt="Sending Hype" />
          </div>
        </div>
      </div>
      <div className="flex items-col items-center justify-end px-2 sm:pr-20 py-10">
        <div className="flex flex-col items-center sm:items-start sm:flex-row bg-[#FF6581] py-10 sm:w-7/12 md:w-6/12 rounded-3xl sm:px-4 border-r-8 border-[#7367FF]">
          <div className="w-11/12 text-white">
            <h1 className="text-xl sm:text-2xl font-bold py-3">
              Distribute HypeGG
            </h1>
            <p className="pb-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              culpa numquam consequuntur ipsum aut dicta ad suscipit, quaerat ea
              nostrum
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
      <div className="flex items-col items-center justify-start px-2 sm:pl-20 py-10">
        <div className="flex flex-col items-center sm:items-start sm:flex-row bg-[#7367FF] py-10 sm:w-7/12 md:w-6/12 rounded-3xl sm:px-4 border-l-8 border-[#FF6581]">
          <div className="w-11/12 text-white">
            <h1 className="text-xl sm:text-2xl font-bold py-3">
              Review HypeGG
            </h1>
            <p className="pb-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              culpa numquam consequuntur ipsum aut dicta ad suscipit, quaerat ea
              nostrum
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
