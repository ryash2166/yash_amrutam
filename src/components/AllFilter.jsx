import React from 'react'
import DropDown from './common/DropDown'

const AllFilter = () => {
  return (
    <div className='relative border border-[#272727] p-4'>
    <div className='container flex justify-center gap-20 flex-wrap p-0 max-xl:gap-4 max-lg:justify-center '>
      <DropDown classname="bg-[#f3f3f3]" title="Expertise" data1="Insomnia" data2="Women's" data3="Digestive" data4="Sexual" data5="Hair & Skin"  />
      <DropDown classname="bg-[#f3f3f3]" title="Gender" data1="Male" data2="Female" data3="Other" />
      <DropDown classname="bg-[#f3f3f3]" title="Fees" data1="Rs.0-Rs.500" data2="Rs.500-Rs.1000" data3="High to Low" data4="Low to High" data5="Best Value" />
      <DropDown classname="bg-[#f3f3f3]" title="Languages" data1="English" data2="Hindi" data3="Gujarati" data4="Telugu" data5="Tamil" />
      <DropDown classname="bg-[#dceedc]" title="Other" data1="Piles" data2="Dental" data3="" data4="Sexual" data5="Bones" />
    </div>
    </div>
  )
}

export default AllFilter
