import React from "react";
import Image from "next/image";
import faq from "../../public/faq.png";

const FAQ = () => {
  return (
    <div>
      <div className="flex items-center justify-center font-extrabold">
        <h1 className="text-[#7165FF] text-3xl py-10">FAQ</h1>
        <div className="mt-8">
          <Image src={faq} width={70} height={50} alt="faq image" />
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] rounded-3xl mx-2 md:w-1/2 md:mx-auto  shadow-lg text-white">
        <div className="px-20 py-10">
          <div className="p-4">
            + Lorem ipsum dolor sit amet consectetur. Eu fermentum volutpat at
            in quam dictumst quam mauris amet.
          </div>
          <div className="p-4">
            + Lorem ipsum dolor sit amet consectetur. Eu fermentum volutpat at
            in quam dictumst quam mauris amet.
          </div>
          <div className="p-4">
            + Lorem ipsum dolor sit amet consectetur. Eu fermentum volutpat at
            in quam dictumst quam mauris amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
