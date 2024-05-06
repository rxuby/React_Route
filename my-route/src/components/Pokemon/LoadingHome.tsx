import React from "react";

const LoadingHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-black h-screen">
        
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#383838",
            border: "1px solid #484848",
            borderRadius: "0.5rem",
            padding: "1rem",
            animation: "pulse 1.5s infinite alternate",
          }}
        ></div>
      ))}
    </div>
  );
};

export default LoadingHome;
