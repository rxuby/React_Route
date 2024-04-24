import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import logo from "@images/logo.png";

const LayoutHome: React.FC = () => {
  return (
    <>
      <div>
        <nav className="bg-slate-600 !font-kanit ">
          <ul className="flex gap-7 pt-3 justify-center items-center border-none ">
            {/* <li className="">
              <Link to="/"><FaReact /></Link>
            </li> */}

            <li>
              <Link to="/">
                <img  src={logo} alt="logo"  />
              </Link>
            </li>

            <li>
              <Link to="/home">หน้าหลัก</Link>
            </li>
            <li>
              <Link to="/home/allnews">ข่าวทั้งหมด</Link>
            </li>
            <li>
              <Link to="/home/allnews/1">ข่าวกีฬา</Link>
            </li>
            <li>
              <Link to="/home/allnews/2">ข่าวการเมือง</Link>
            </li>
            <li>
              <Link to="/home/allnews/3">ข่าวดารา</Link>
            </li>
            <li>
              <Link to="/home/allnews/4">ข่าวทั่วไป</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default LayoutHome;
