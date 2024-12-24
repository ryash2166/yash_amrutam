import React from "react";
import { NavLink } from "react-router";
import { MdOutlineStar } from "react-icons/md";
import gender from "../../assets/gender.svg";
import work from "../../assets/work.svg";
import speak from "../../assets/speak.png";

const Card = ({
  id,
  name,
  experience,
  videofee,
  chatfee,
  language,
  rating,
  image,
}) => {
  return (
    <div className="bg-[#fff7e2] border border-[#e3e3e3] shadow-[10px_4px_12.5px_rgba(0,0,0,0.07)] rounded-[30px] max-w-[325px] max-h-[561px] mt-[53px] px-[35px] py-[25px] max-lg:mt-0 max-sm:rounded-lg hover:scale-[1.02] duration-200 ease-linear">
      <div className="flex flex-col justify-center items-center gap-[32px]">
        <div className="flex flex-col p-0 items-center gap-[21px] w-[289px] h-[370px]">
          <div className="w-[149px] h-[154px] relative flex justify-center items-center">
            <div className="flex flex-col items-center bottom-0  py-1 px-3 gap-3 absolute w-[70px] h-[28px] rounded-[17px] z-10 bg-gradient-to-b from-[#0B0B0B] to-[rgba(11,11,11,0.79)]">
              <div className="flex flex-row items-end p-0 gap-1 w-[46px] h-[20px]">
                <p className="w-[22px] h-[18px] font-[Nunito] font-bold text-[16px] leading-[18px] -tracking-[0.001em] text-white">
                  {rating}
                </p>
                <MdOutlineStar className="text-[#efda3b] w-[20px] h-[20px]" />
              </div>
            </div>
            <div className="absolute w-[149px] h-[150px] ">
              <img
                src={image}
                alt="doctor_pic"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 w-[289px] h-[195px] p-0">
            <h1 className="w-full h-[28px] font-[Nunito] text-[32px] text-[#2e2f2e] font-bold leading-7 -tracking-[0.01em]">
              {name}
            </h1>
            <div className="flex flex-col justify-center items-center p-0 gap-4 w-[289px] h-[151px]">
              <div className="flex items-start p-0 flex-col gap-[7px] w-[247px] h-[78px]">
                <div className="flex flex-row items-center p-0 gap-[15px] w-[191px] h-[20px]">
                  <img src={gender} alt="" className="w-4 h-4" />
                  <p className="w-[160px] h-[20px] font-[Nunito] text-base leading-5 -tracking-[0.01em] text-[#646665]">
                    Male-Female Infertility
                  </p>
                </div>
                <div className="flex flex-row items-center p-0 gap-[7px] h-[24px]">
                  <img src={work} alt="" className="w-6 h-6" />
                  <p className="h-[20px] font-semibold font-[Nunito] text-base leading-5 -tracking-[0.01em] text-[#646665]">
                    {experience}
                  </p>
                </div>
                <div className="flex flex-row items-center p-0 gap-[12px] w-[247px] h-[20px]">
                  <img src={speak} alt="" className="w-[18px] h-[16px]" />
                  <p className="w-[217px] h-[20px] font-[Nunito] text-base leading-5 -tracking-[0.01em] text-[#646665]">
                    {language}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-0 flex-row gap-2 w-[289px] h-[57px]">
                <div className="flex flex-col items-center gap-1 w-[136px] h-[57px] rounded-[10px] border-[1px] border-[#3a643b63] pt-2 px-2 pb-4">
                  <p className="w-[120px] h-[20px] font-[Nunito] font-semibold text-sm -tracking-[0.01em] text-[#3c3c3c] ">
                    Video Consultation
                  </p>
                  <p className="w-[34px] h-[20px] font-[Nunito] font-bold text-sm -tracking-[0.01em] text-[#3a643b]">
                    {videofee}
                  </p>
                </div>
                <div className="flex flex-col px-2 pt-2 pb-1 items-center gap-1 w-[129px] h-[57px] bg-[#fff7e2] border-[1px] border-[#3a643b63] rounded-[10px]">
                  <p className="w-[113px] h-[20px] font-[Nunito] font-semibold text-sm -tracking-[0.01em] text-[#3c3c3c]">
                    Chat Consultation
                  </p>
                  <p className="w-[28px] h-[20px] font-[Nunito] font-bold text-sm -tracking-[0.01em] text-[#3a643b]">
                    {chatfee}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[9px] p-0 w-[286px] h-[104px]">
          <NavLink
            to={`/profile/${id}`}
            className="flex flex-row justify-center items-center px-[78px] py-[15px] gap-[10px] w-[284px] h-[42px] bg-white rounded-[8px] border-[1px] border-[#3a643b] text-[#3a643b] hover:!bg-[#f4f4f4] duration-100"
          >
            <p className="w-[88px] h-[20px] font-[Nunito] font-semibold text-[16px] leading-5 -tracking-[0.01em] ">
              View Profile
            </p>
          </NavLink>
          <NavLink className="flex flex-row justify-center items-center px-[37px] py-[15px] gap-[10px] w-[287px] h-[53px] bg-[#3a643b] rounded-[8px] border-[1px] border-[#3a643b] text-white hover:!bg-[#618a61] duration-100">
            <div className="font-[Nunito] font-semibold text-[16px] leading-5 -tracking-[0.01em] ">
              Book a consultation
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
