import React from 'react'

const SpecializeCard = ({title, image}) => {
  return (
    <div className='flex h-[123px] flex-col items-center justify-start gap-[7px]'>
      <div className='box-border flex flex-col items-center justify-center overflow-hidden rounded-xl border-[2px] border-solid border-whitesmoke-200 bg-[#FFFCF2] px-[7px] py-[9px] duration-200 hover:border-neutral-300'>
        <img src={image} alt="" className='h-[84px] max-h-full w-[84px] overflow-hidden object-cover' />
      </div>
      <div className='text-center text-black font-[Nunito] text-[12px] font-medium capitalize leading-[19.2px] sm:text-[16px]'>{title}</div>
    </div>
  )
}

export default SpecializeCard
