import image from "@images/image2-1.png";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigator = useNavigate();
  return (
    <div style={{fontFamily:"kanit"}} className=" m-20 rounded-3xl shadow-xl ">
      <div className="flex justify-center content-center my-10 ">
        <img src={image} alt="Group 1" />
      </div>

      <h3 className="mb-5 font-extrabold text-slate-700">ogs Daily News</h3>
      <button
        className="text-white rounded-md mb-10 p-3 px-4 bg-slate-700 shadow-lg shadow-indigo-500/50 border hover:bg-white hover:text-slate-700  hover:border-slate-700 duration-700"
        onClick={() => navigator("/home")}
      >
        เข้าสู่เว็บไซต์
      </button>
    </div>
  );
}

export default MainPage;
