import React from "react";
import women from "../assets/women.png";
import skin from "../assets/skin.png";
import immunitiy from "../assets/immunitiy.png";
import hair from "../assets/hair.png";
import SpecializeCard from "./common/SpecializeCard";

const Specialize = () => {
  return (
    <div className="flex max-w-full flex-col items-start justify-start gap-[27px] self-stretch rounded-2xl border-[2px] border-neutral-300 bg-white pb-[31px] pl-px pr-0 pt-0">
      <div className="flex flex-wrap items-center justify-between gap-5 self-stretch overflow-hidden rounded-t-2xl p-[13px] text-gray-700 sm:px-[35px] [background:linear-gradient(270.04deg,_#FBFCFB_0.05%,_#F4F7EC_99.98%)]">
        <h3 className="min-h-fit font-[Nunito] text-[20px] font-semibold sm:text-[24px]">
          I Specialize In
        </h3>
      </div>
      <div className="w-full px-3 py-0 text-base text-black sm:px-[30px]">
        <div className="z-[1] w-full flex flex-wrap items-center max-sm:justify-center gap-[14px]">
          <SpecializeCard title="Women's Health" image={women} />
          <SpecializeCard title="Skin Care" image={skin} />
          <SpecializeCard title="Immunity" image={immunitiy} />
          <SpecializeCard title="Hair Care" image={hair} />
        </div>
      </div>
    </div>
  );
};

export default Specialize;
