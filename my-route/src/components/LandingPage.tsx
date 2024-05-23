import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigator = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-5xl font-bold text-indigo-500 mb-8">WORKSHOP</div>
      <button
        className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
        onClick={() => navigator("/mainpage")}
      >
        Ogs Daily News
      </button>

      <div className="grid grid-cols-2 gap-4">
        <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
          onClick={() => navigator("/test1")}
        >
          CSS workshop 1
        </button>
        <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
          onClick={() => navigator("/test2")}
        >
          CSS workshop 2
        </button>
        <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
          onClick={() => navigator("/test31")}
        >
          CSS workshop 3
        </button>
        <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
          onClick={() => navigator("/test32")}
        >
          CSS workshop 4
        </button>
      </div>

      <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
        onClick={() => navigator("/card")}
      >
        Tailwind CSS
      </button>

      <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
        onClick={() => navigator("/register")}
      >
        CSS Framework & Ant Design
      </button>

      <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
        onClick={() => navigator("/testapi")}
      >
        API Connection
      </button>

      <button
 className="border-2 border-indigo-500  text-indigo-500 hover:bg-indigo-500 w-96 text-xl font-bold py-4 px-4 rounded mb-4 hover:text-white duration-300"
        onClick={() => navigator("/pokemonhome")}
      >
        Pokemon
      </button>
    </div>
  );
}

export default LandingPage;
