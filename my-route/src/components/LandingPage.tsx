import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigator = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-bold text-gray-800 mb-8">WorkShop</div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => navigator("/mainpage")}
      >
        Ogs Daily News
      </button>

      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigator("/test1")}
        >
          CSS workshop 1
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigator("/test2")}
        >
          CSS workshop 2
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigator("/test31")}
        >
          CSS workshop 3
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigator("/test32")}
        >
          CSS workshop 4
        </button>
      </div>

      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => navigator("/card")}
      >
        Tailwind CSS
      </button>

      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => navigator("/register")}
      >
        CSS Framework & Ant Design
      </button>

      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => navigator("/testapi")}
      >
        API Connection
      </button>

      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => navigator("/pokemonhome")}
      >
        Pokemon
      </button>
    </div>
  );
}

export default LandingPage;
