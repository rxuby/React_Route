import React from "react";
import mojo from "../images/majo012.jpg";
import mimi from "../images/mimi008.jpg";
import img404 from "../images/image404.jpg";
import poco from "../images/Pochacco.png";
import iconpoco from "../images/icons8-pochacco-100.png";
import { FaRegUser } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";

const Card = () => {
  return (
    <>
      <div className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="w-full mt-10 p-14 lg:space-x-36 border-[6px] border-black flex-col lg:flex-row  items-center justify-center content-center rounded-[30px]  text-white lg:text-text-rose-600 lg:flex  flex  mb-20 bg-rose-600 shadow-xl lg:h-[24rem]  lg:w-[50rem]">
          <div className="">
            <img
              className="drop-shadow-xl border-[6px] border-black rounded-full w-48
               mb-7 shadow-xl"
              src={poco}
              alt="รูปภาพ"
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-center">
              <img className="" src={iconpoco} alt="" />
            </div>
            <p className="mt-5  border rounded-[20px] ">rxuby.com</p>
          </div>
        </div>

        <div className="w-full p-14  border-[6px] border-black flex-col lg:flex-row-reverse  items-center justify-between content-center rounded-[30px]  text-white lg:text-text-rose-600 lg:flex flex  mb-20 bg-white shadow-xl lg:h-[24rem] lg:w-[50rem]">
          <div className="">
            <img
              className="border-[6px] border-black rounded-full w-48 lg:w-52 mb-7 lg:ml-4 lg:items-center shadow-xl"
              src={poco}
              alt="รูปภาพ"
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex mb-8 ">
              <img className="w-16 drop-shadow-xl " src={iconpoco} alt="" />
              <p className="text-black content-center ml-4 font-bold italic text-xl">
                Jutapon Chaiyakhun <br /> Front-End Internship
              </p>
            </div>
            <div className=" lg:ml-0  text-black  lg:p-0 text-left ">
              <div className="flex content-center items-center">
                <div className="mr-4">
                  <FaRegUser className="w-6 ml-8 lg:m-0" />
                </div>
                <div className="">
                  <p> จุฑาภรณ์ ไชยขันธ์ (ขิง)</p>
                  <p>Jutapon Chaiyakhun (Khing)</p>
                </div>
              </div>

              <div className="flex content-center items-center">
                <div className="mr-4">
                  <PiStudentBold className="w-6 ml-8 lg:m-0" />
                </div>
                <div>
                  <p>นักศึกษาชั้นปีที่ 3 วิทยาลัยการคอมพิวเตอร์ </p>
                  <p>3rd yrs, College of Computing</p>
                </div>
              </div>

              <div className="flex content-center items-center">
                <div className="mr-4">
                  <LuSchool className="w-6 ml-8 lg:m-0" />
                </div>
                <div>
                  <p>มหาวิทยาลัยขอนแก่น</p>
                  <p>Khon Kaen University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
