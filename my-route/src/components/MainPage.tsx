import React from "react";
import image from "@images/image2-1.png";
import { useNavigate } from "react-router-dom";


function MainPage() {
  const navigator = useNavigate();
  return (
    <>
      <div>
        <img src={image} alt="Group 1" />
      </div>
      <h3 className="mb-10">ogs Daily News</h3>
      <button className="p-4 bg-slate-700 shadow-lg shadow-indigo-500/50" onClick={() => navigator("/home")}>เข้าสู่เว็บไซต์</button>
    </>
  );
}

export default MainPage;
