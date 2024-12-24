import React from 'react'
import Filter from './common/Filter';

const AddedFilter = () => {
  return (
    <div className='flex p-0 gap-4 justify-end container mt-[60px] max-lg:justify-center flex-wrap max-md:hidden'>
      <Filter title="Hair care" />
      <Filter title="Female" />
      <Filter title="Rs.0-Rs.500" />
      <Filter title="Hindi" />
    </div>
  )
}

export default AddedFilter





