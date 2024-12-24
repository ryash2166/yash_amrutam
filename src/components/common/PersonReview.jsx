import React from 'react'
import review from '../../assets/review.png'
import star from '../../assets/star.svg'

const PersonReview = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-1 rounded-2xl bg-neutral-100 px-4 py-4 sm:!mx-0 sm:!px-9'>
      <div className="mb-3 flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="flex flex-col items-center justify-start gap-1 md:flex-row">
            <img src={review} alt="" className='relative size-[30px] rounded-[50%] object-cover sm:!size-[54px]' />
            <div className='flex flex-col items-center justify-center gap-[3px] px-3 md:items-start'>
                <h3 className='font-[Nunito] text-sm font-medium text-black sm:!text-[20px]'>Alicent Hightower</h3>
                <span className='font-[Nunito] text-sm text-neutral-400 sm:text-[16px]'>Consulted for Skin care</span>
            </div>
        </div>
        <span className="shrink-0 font-nunito text-[10px] text-neutral-400 sm:text-sm">20 January 2023</span>
      </div>
      <div className='mt-0.5 flex items-center gap-0'>
        <img src={star} alt="Review_Star" />
        <img src={star} alt="Review_Star" />
        <img src={star} alt="Review_Star" />
        <img src={star} alt="Review_Star" />
        <img src={star} alt="Review_Star" />
      </div>
      <div className='text-justify font-[Nunito] text-xs sm:text-base'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.</div>
    </div>
  )
}

export default PersonReview
