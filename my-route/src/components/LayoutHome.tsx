import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import logo from "@images/logo.png";

const LayoutHome: React.FC = () => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#22d3ee]' : '';
  };

  return (
    <>
      <nav className="bg-slate-600 !font-kanit">
        <ul className="flex gap-7 pt-3 justify-center items-center border-none">
          {/* 
          Uncomment the below code if you want to use the React icon instead of the logo
          <li>
            <Link to="/"><FaReact /></Link>
          </li> 
          */}
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/home" className={isActive('/home')}>หน้าหลัก</Link>
          </li>
          <li>
            <Link to="/home/allnews" className={isActive('/home/allnews')}>ข่าวทั้งหมด</Link>
          </li>
          <li>
            <Link to="/home/allnews/1" className={isActive('/home/allnews/1')}>ข่าวกีฬา</Link>
          </li>
          <li>
            <Link to="/home/allnews/2" className={isActive('/home/allnews/2')}>ข่าวการเมือง</Link>
          </li>
          <li>
            <Link to="/home/allnews/3" className={isActive('/home/allnews/3')}>ข่าวดารา</Link>
          </li>
          <li>
            <Link to="/home/allnews/4" className={isActive('/home/allnews/4')}>ข่าวทั่วไป</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default LayoutHome;
