import React from "react";

const Intro = () => {
  return (
    <div className="mx-2 mt-20 max-w-7xl flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-[#FF6581] to-[#FA878D] py-20 px-40 text-white md:mx-auto md:w-full">
      <div className="text-center text-xl font-medium">
        HypeGG Inc built the Proof of Attendance Protocol
      </div>
      <div className="mx-auto mt-10 flex max-w-sm text-center font-normal">
      HypeeGg allows event organizers, educators or anyone to verify that participants have attended a particular event or class. This platform allows particular users of events to be able to prove their presence using soulbound NFTs.
      </div>
    </div>
  );
};

export default Intro;
