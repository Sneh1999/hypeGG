import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
