import React from "react";
import image from "@images/Group-1.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigator = useNavigate();
  return (
    <>
      <div>
        <img src={image} alt="Group 1" />
      </div>
      <button
        className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50"
        onClick={() => navigator("/home")}
      >
        กลับสู่หน้าหลัก
      </button>
    </>
  );
}

export default NotFound;
