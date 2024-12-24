import React from "react";
import PersonReview from "./common/PersonReview";

const Review = () => {
  return (
    <div className="scroll-mt-20 sm:scroll-mt-[120px]">
      <div className="flex max-w-full flex-col items-start justify-start gap-[27px] self-stretch rounded-2xl border-[2px] border-neutral-300 bg-white pb-[31px] pl-px pr-0 pt-0">
        <div className="flex flex-wrap items-center justify-between gap-5 self-stretch overflow-hidden rounded-t-2xl p-[13px] text-gray-700 sm:px-[35px] [background:linear-gradient(270.04deg,_#FBFCFB_0.05%,_#F4F7EC_99.98%)]">
          <h3 className="min-h-fit font-[Nunito] text-[20px] font-semibold sm:text-[24px]">
            Featured Reviews (102)
          </h3>
        </div>
        <div className="space-y-4 px-2 sm:!px-[30px]">
            <PersonReview/>
            <PersonReview/>
        </div>
      </div>
    </div>
  );
};

export default Review;
