import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigator = useNavigate();
  return (
    <div>
      <div>
        <h1>WorkShop</h1>
      </div>
      <div>
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/mainpage")}
        >
          Ogs Daily News
        </button>
      </div>

      <div className="flex">
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/test1")}
        >
          CSS workshop 1
        </button>
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/test2")}
        >
          CSS workshop 2
        </button>
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/test31")}
        >
          CSS workshop 3
        </button>
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/test32")}
        >
          CSS workshop 4
        </button>
      </div>

      <div>
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/card")}
        >
          Tailwind CSS
        </button>
      </div>

      <div>
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/register")}
        >
          CSS Framework & Ant Design
        </button>
      </div>

      <div>
        <button
          className="text-white p-4 bg-slate-700 shadow-lg shadow-indigo-500/50 mb-6"
          onClick={() => navigator("/testapi")}
        >
          API Connection
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
