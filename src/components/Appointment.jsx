import React from "react";
import video from "../assets/video.png";
import calender from "../assets/calender.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

const Appointment = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-2 rounded-2xl border-solid border-neutral-300 pb-[30px] mb-[20px] pt-2 sm:gap-4 sm:border-[2px] sm:px-5 sm:!pt-[20px] lg:!gap-[27px]">
      <div className="hidden w-full justify-between rounded-[15px] border-[1px] border-solid border-neutral-200 px-3 py-3.5 font-[Nunito] font-semibold text-xl text-black sm:flex lg:px-7">
        <span className="font-semibold">Appointmnet Fee</span>
        <span className="font-[Nunito] font-semibold text-[#3a643b]">
          ₹699.00
        </span>
      </div>
      <div className="mx-1 flex items-center gap-5">
        <span className="inline-block whitespace-nowrap font-[Nunito] text-[15px] font-bold tracking-[0.5px] text-black sm:text-[20px]">
          Select your mode of session
        </span>
        <hr className="hidden sm:inline h-[2px] w-full bg-neutral-300" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 my-4 font-[Nunito] text-[13px] sm:text-lg font-medium">
        <button className="group flex min-w-[158px] h-[78px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] py-3 hover:border-[#3a643b] hover:bg-[#f2fbf2] sm:w-[150px] border-neutral-300">
          <div className="font-[Nunito] flex items-center justify-center gap-1 text-[13px] font-medium tracking-[0.5px] sm:text-[18px] text-black">
            <span className="min-w-fit text-nowrap capitalize">In-Clinc</span>
          </div>
          <span className="font-[Nunito] text-[13px] tracking-[0.5px] text-neutral-500 sm:text-[16px]">
            45 Mins
          </span>
        </button>
        <button className="group flex min-w-[158px] h-[78px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] py-3 hover:border-[#3a643b] hover:bg-lightolivegreen sm:w-[150px] border-[#3a643b] bg-[#f2fbf2]">
          <div className="font-[Nunito] flex items-center justify-center gap-1 text-[13px] font-medium tracking-[0.5px] sm:text-[18px] text-[#3a643b]">
            <span className="min-w-fit text-nowrap capitalize">Video</span>
            <img src={video} alt="" className="w-4 sm:w-6" />
          </div>
          <span className="font-[Nunito] text-[13px] tracking-[0.5px] text-neutral-500 sm:text-[16px]">
            45 Mins
          </span>
        </button>
        <button className="group flex min-w-[158px] h-[78px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] py-3 hover:border-[#3a643b] hover:bg-[#f2fbf2] sm:w-[150px] border-neutral-300">
          <div className="font-[Nunito] flex items-center justify-center gap-1 text-[13px] font-medium tracking-[0.5px] sm:text-[18px] text-black">
            <span className="min-w-fit text-nowrap capitalize">Chat</span>
          </div>
          <span className="font-[Nunito] text-[13px] tracking-[0.5px] text-neutral-500 sm:text-[16px]">
            10 Mins
          </span>
        </button>
      </div>
      <div className="mx-1 flex items-center gap-5">
        <span className="inline-block whitespace-nowrap font-[Nunito] text-[15px] font-bold tracking-[0.5px] text-black sm:text-[20px]">
          Pick a time slot
        </span>
        <hr className="hidden sm:inline h-[2px] w-full bg-neutral-300" />
        <div className="border-[1px] p-2 rounded-full flex items-center max-md:hidden">
          <img src={calender} alt="calender" className="" />
        </div>
      </div>
      <div className="border-[1px] border-[#e1e1e1] rounded-3xl">
        <div className="flex flex-row items-center justify-evenly p-0 gap-[18px]">
          <img src={left} alt="" className="w-5 h-5 max-md:hidden" />
          <div className="flex flex-wrap justify-center items-center gap-2 my-4 font-[Nunito] text-[13px] sm:text-lg font-medium">
            <button className="group flex min-w-[158px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] py-3 hover:border-[#3a643b] hover:bg-lightolivegreen sm:w-[150px] border-[#3a643b] bg-[#f2fbf2]">
              <div className="font-[Nunito] flex items-center justify-center gap-1 text-[13px] font-semibold tracking-[0.5px] sm:text-[18px] text-[#3a643b]">
                <span className="min-w-fit text-nowrap capitalize">Mon, 10 Oct</span>
              </div>
              <span className="font-[Nunito] text-[13px] tracking-[0.5px] text-neutral-500 sm:text-[16px]">
                10 slots
              </span>
            </button>
            <button className="group flex min-w-[158px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] py-3 hover:border-[#3a643b] hover:bg-[#f2fbf2] sm:w-[150px] border-neutral-300">
              <div className="font-[Nunito] flex items-center justify-center gap-1 text-[13px] tracking-[0.5px] sm:text-[18px] text-black">
                <span className="min-w-fit text-nowrap capitalize">
                  tue, 11 oct
                </span>
              </div>
              <span className="font-[Nunito] text-[13px] tracking-[0.5px] text-[#D5512E] sm:text-[16px]">
                02 slots
              </span>
            </button>
            <button className="group flex min-w-[158px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] py-3 hover:border-[#3a643b] hover:bg-[#f2fbf2] sm:w-[150px] border-neutral-300">
              <div className="font-[Nunito] flex items-center justify-center gap-1 text-[13px] tracking-[0.5px] sm:text-[18px] text-black">
                <span className="min-w-fit text-nowrap capitalize">wed, 12 oct</span>
              </div>
              <span className="font-[Nunito] text-[13px] tracking-[0.5px] text-[#F1B93A] sm:text-[16px]">
                05 slots
              </span>
            </button>
          </div>
          <img src={right} alt="" className="w-5 h-5 max-md:hidden" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-[13px] ml-[11px] p-0">
        <p className="font-bold font-[Nunito] text-[18px] leading-[24.55px] tracking-[0.2px]">Morning</p>
        <div className="flex flex-row  flex-wrap items-start justify-start p-0 gap-y-[13px] gap-x-3">
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">09:00 AM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">09:30 AM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">10:00 AM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">10:15 AM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">10:45 AM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] hover:!text-black bg-[#3a643b] text-white rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">11:00 AM</span>
            </button>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[13px] ml-[11px] p-0">
        <p className="font-bold font-[Nunito] text-[18px] leading-[24.55px] tracking-[0.2px]">Evening</p>
        <div className="flex flex-row  flex-wrap items-start justify-start p-0 gap-y-[13px] gap-x-3">
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">04:00 PM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">04:15 PM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">04:30 PM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">04:45 PM</span>
            </button>
            <button className="border-[1px] w-[106px] h-[67px] border-[#ebebeb] hover:border-[#3a643b] hover:bg-[#f2fbf2] rounded-3xl p-[12.5px] gap-2">
                <span className="text-[15px] leading-[18.15px] tracking-[0.2px]">05:15 PM</span>
            </button>
        </div>
        <div className="flex items-center w-full justify-center mt-4  ">
        <button className="max-w-[476.37px] w-full h-[59.73px] bg-[#3a643b] rounded-lg  border-[1px] border-[#3a643b] duration-200 ease-in-out  hover:bg-[#f2fbf2] hover:!text-black text-white font-medium text-[20px] leading-[24.2px]">Make An Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
