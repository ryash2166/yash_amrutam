import React, { useState } from "react";

const Concerns = () => {
  const allConcerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
    "Hormonal Imbalance",
    "Menopause Issues",
    "Infertility",
    "Fibroids",
  ];

  const [visibleConcerns, setVisibleConcerns] = useState(6);
  const isShowMore = visibleConcerns < allConcerns.length;

  const toggleConcerns = () => {
    setVisibleConcerns(isShowMore ? allConcerns.length : 6);
  };

  return (
    <div className="flex max-w-full flex-col items-start justify-start gap-[27px] self-stretch rounded-2xl border-[2px] border-neutral-300 bg-white pb-[31px] pl-px pr-0 pt-0">
      <div className="flex flex-wrap items-center justify-between gap-5 self-stretch overflow-hidden rounded-t-2xl p-[13px] text-gray-700 sm:px-[35px] [background:linear-gradient(270.04deg,_#FBFCFB_0.05%,_#F4F7EC_99.98%)]">
        <h3 className="min-h-fit font-[Nunito] text-[20px] font-semibold sm:text-[24px]">
          The Concerns I Treat
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-[18px] px-1 py-0 sm:justify-start sm:gap-x-3 sm:!px-6">
        {allConcerns.slice(0, visibleConcerns).map((concern, index) => (
          <span key={index} className="flex h-[43px] flex-row items-center justify-center rounded-[19px] bg-[#F7F7FC] px-3 py-2.5 text-[16px] leading-[18px] font-medium text-[#3A643B] sm:text-[16px]">{concern}</span>
        ))}
        <button
          onClick={toggleConcerns}
          className="px-3 py-1 text-sm font-medium text-green-800 border border-green-200 bg-white rounded-full hover:bg-green-50 transition"
        >
          {isShowMore ? `+ ${allConcerns.length - visibleConcerns} More` : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Concerns;
