import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdLocationOn, MdOutlineKeyboardArrowDown } from "react-icons/md";

const MainTitle = () => {
  return (
    <div className="relative h-[180px] bg-[#eaf2ea] max-w-full sm:h-[200px] pb-4">
      <div className="flex h-full flex-col items-center justify-center px-2">
        <h1 className="font-medium text-xl text-center md:text-2xl lg:text-4xl capitalize pb-2">
          Find expert Doctors for an Online session here
        </h1>
        <div className="flex flex-row items-start p-0 gap-2 max-w-[682px] max-h-[54px] mt-3 max-sm:hidden">
            <div className="flex space-x-2 justify-center items-center py-2 px-2 max-w-[240px] max-h-[60px] h-full bg-white border-[1px] border-[#d4d4d4] rounded-lg">
                <MdLocationOn className="w-6 h-6 text-[#3A643B]"/>
                <p className="text-base text-[#767676] font-normal leading-6 text-center -tracking-[0.005em] break-words max-md:hidden">Select Location</p>
                <MdOutlineKeyboardArrowDown className="w-6 h-6 text-[#3A643B]"/>
            </div>
            <div className="px-[10px] py-[13px] flex justify-center items-center gap-[105px] max-w-[475px] max-h-[60px] bg-white border-[1px] border-[#cdcdcd] rounded-lg ">
                <input type="text" placeholder="eg. Doctor, specialisation, clinic name" className="leading-[19px]  font-normal text-[#7b7b7b] !outline-none" />
                <FaArrowRightLong className="w-4 h-4 flex items-center text-[#7b7b7b] !font-light"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;

