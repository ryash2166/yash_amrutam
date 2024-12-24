import React, { useState } from "react";
import plus from "../assets/plus.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import { useParams } from "react-router";
import { CardData } from "../Data/CardData";

const AboutMe = () => {
    const { id } = useParams(); // Get doctor ID from route params
    const doctor = CardData.find((doc) => doc.id === id); // Find the matching doctor
  
    if (!doctor) {
      return <div>Doctor not found</div>;
    }
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex max-w-full flex-col items-start justify-start gap-[27px] self-stretch rounded-2xl border-[2px] border-neutral-300 bg-white pb-[31px] pl-px pr-0 pt-0">
      <div className="flex flex-wrap items-center justify-between gap-5 self-stretch overflow-hidden rounded-t-2xl p-[13px] text-gray-700 sm:px-[35px] [background:linear-gradient(270.04deg,_#FBFCFB_0.05%,_#F4F7EC_99.98%)] max-sm:!gap-3">
        <h3 className="min-h-fit font-[Nunito] text-[20px] font-semibold sm:text-[24px]">
          A Little About Me
        </h3>
        <button className="flex cursor-pointer items-center justify-center gap-[6.7px] rounded-xl border-[1.5px]  border-[#3A643B] bg-white px-4 py-1 duration-100 hover:!bg-neutral-100 active:scale-95 sm:pl-[21px] sm:pr-[19px]">
          <div className="text-center text-[11px] text-base font-medium leading-[24px] text-dimgray-300 sm:text-[16px]">
            Follow
          </div>
          <img src={plus} alt="Add" className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
        </button>
      </div>
      <div className="flex flex-col items-start gap-[30px] max-sm:px-[13px] px-[34px]">
        <div className="flex max-w-full flex-col items-start justify-center gap-[6px] self-stretch">
          <p
            className={`text-justify text-[16px] leading-[27px] text-neutral-400 ${
              isExpanded ? "" : "line-clamp-2"
            } transition-all`}
          >
            {doctor.description}
          </p>
          <div className="flex flex-row items-center justify-end w-full">
            <button
              onClick={toggleReadMore}
              className="text-base leading-[27px] text-[#2b2b2b] underline font-medium focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="flex w-full items-start justify-start gap-[15px] max-xl:flex-col xl:items-center">
          <div className="whitespace-nowrap font-[Nunito] text-[20px] font-medium leading-[20px] tracking-[-0.01em] text-black">
            Language Spoken
          </div>
          <div className="flex w-full flex-wrap items-center gap-2">
            <div className="whitespace-nowrap rounded-2xl bg-[#2E37A40A] px-[19.5px] py-2.5 font-[Nunito] text-lg leading-[20px] tracking-[-0.01em] border-none">
              English
            </div>
            <div className="whitespace-nowrap rounded-2xl bg-[#2E37A40A] px-[19.5px] py-2.5 font-[Nunito] text-lg leading-[20px] tracking-[-0.01em] border-none">
              Hindi
            </div>
            <div className="whitespace-nowrap rounded-2xl bg-[#2E37A40A] px-[19.5px] py-2.5 font-[Nunito] text-lg leading-[20px] tracking-[-0.01em] border-none">
              Telugu
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-start gap-[15px] xl:items-center">
          <div className="flex items-center justify-center w-11 h-11 relative">
            <div className="w-11 h-11 bg-[#f7f7fc] border border-[#8e8e8e] rounded-full"></div>
            <img
              src={facebook}
              alt="Facebook"
              className="absolute w-[11px] h-5"
            />
          </div>
          <div className="flex items-center justify-center w-11 h-11 relative">
            <div className="w-11 h-11 bg-[#f7f7fc] border border-[#8e8e8e] rounded-full"></div>
            <img src={instagram} alt="Instagram" className="absolute w-5 h-5" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 relative">
            <div className="w-11 h-11 bg-[#f7f7fc] border border-[#8e8e8e] rounded-full"></div>
            <img
              src={youtube}
              alt="Youtube"
              className="absolute w-[22px] h-[15.46px]"
            />
          </div>
          <div className="flex items-center justify-center w-11 h-11 relative">
            <div className="w-11 h-11 bg-[#f7f7fc] border border-[#8e8e8e] rounded-full"></div>
            <img
              src={twitter}
              alt="Twitter"
              className="absolute w-[22px] h-[17.94px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
