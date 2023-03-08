import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex space-x-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-green-500"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-yellow-500"></div>
      </div>
    </div>
  );
};

export default Loader;
