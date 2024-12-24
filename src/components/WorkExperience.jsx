import React from "react";
import { CardData } from "../Data/CardData";
import { useParams } from "react-router";
import experience from "../assets/experience.svg";
const WorkExperience = () => {
  const { id } = useParams(); // Get doctor ID from route params
  const doctor = CardData.find((doc) => doc.id === id); // Find the matching doctor

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="flex max-w-full flex-col items-start justify-start gap-[27px] self-stretch rounded-2xl border-[2px] border-neutral-300 bg-white pb-[31px] pl-px pr-0 pt-0">
      <div className="flex flex-wrap items-center justify-between gap-5 self-stretch overflow-hidden rounded-t-2xl p-[13px] text-gray-700 sm:px-[35px] [background:linear-gradient(270.04deg,_#FBFCFB_0.05%,_#F4F7EC_99.98%)]">
        <h3 className="min-h-fit font-[Nunito] text-[20px] font-semibold sm:text-[24px]">
          My Work Experience
        </h3>
      </div>
      <div className="flex w-full flex-col gap-3 px-[10px] py-0 sm:!px-[30px] ">
        <h3 className="flex items-center text-left text-[18px] font-semibold uppercase leading-[19.2px] text-[#3a643b]">
          I have been in practice for : {doctor.experience}
        </h3>
        <hr className="my-0.5 h-[1.5px] bg-neutral-300" />
        <div className="flex justify-between rounded-lg p-1">
          <div className="flex flex-1 flex-col items-start justify-start gap-3 sm:flex-row">
            <div className="flex w-full flex-shrink-0 items-center justify-between overflow-hidden rounded-md bg-[#f7f7fc] p-3 [border:none] sm:w-auto">
              <img src={experience} alt="work_experience" />
            </div>
            <div className="flex flex-col items-start justify-center gap-[9px]">
              <h4 className="font-medium text-base leading-[21px]">
                Midtown Medical Clinic
              </h4>
              <p className="text-neutral-400">Senior doctor</p>
            </div>
          </div>
            <span className="hidden text-neutral-400 sm:inline leading-[21px]">
              2016 - PRESENT
            </span>
        </div>
        <div className="flex justify-between rounded-lg p-1">
          <div className="flex flex-1 flex-col items-start justify-start gap-3 sm:flex-row">
            <div className="flex w-full flex-shrink-0 items-center justify-between overflow-hidden rounded-md bg-[#f7f7fc] p-3 [border:none] sm:w-auto">
              <img src={experience} alt="work_experience" />
            </div>
            <div className="flex flex-col items-start justify-center gap-[9px]">
              <h4 className="font-medium text-base leading-[21px]">
                Midtown Medical Clinic
              </h4>
              <p className="text-neutral-400">Senior doctor</p>
            </div>
          </div>
            <span className="hidden text-neutral-400 sm:inline leading-[21px]">
              2010 - 2015
            </span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
