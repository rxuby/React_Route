import React from "react";
import { FaFileImage } from "react-icons/fa6";


const LoadingHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-white h-screen">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse space-x-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-10 bg-black/20  rounded-xl"
          style={{
            backgroundColor: "#383838",
          }}
        >
          <div className="">
            <div className="bg-white w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingHome;
