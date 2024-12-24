import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

const Filter = ({ title }) => {
  return (
    <div className='relative flex justify-center items-center px-[30px] py-[15px] gap-[10px] bg-[#eaf2ea] rounded-[31px] max-md:px-4 max-md:py-3'>
      <p className='font-[Nunito] font-normal tracking-[0.5px] text-center leading-[19px]'>{title}</p>
      <MdOutlineClose className='w-6 h-6 text-[#838383] max-md:w-5 max-md:h-5' />
    </div>
  )
}

export default Filter

