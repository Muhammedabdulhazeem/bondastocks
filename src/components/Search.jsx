import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <section className='my-[80px] sm:px-4 '>
        <div className='relative flex justify-center items-center '>
            <div className='absolute white-blur h-[300px] top-[0px] translate-y-[-100%] bottom-[0px] left-0 right-0'></div>
            <div className='text-center'>
                <h1 className='font-bold text-[33px] sm:text-[26px] sm:leading-[34px] leading-[40px] mb-4'>Searching for something for specific?</h1>
                <div className='flex items-center bg-[#FAFAFB] sm:w-full w-[688px] rounded mb-6'>
                    <div className='flex items-center'>
                        <div className='flex items-center mr-4 bg-[#F1F0F3] p-3 rounded-tl rounded-bl'>
                            <span className='font-semibold text-[16px] leading-[19px] '>All</span>
                            <BsChevronDown className='ml-5'/>
                        </div>
                        <p className='ml-auto font-semibold text-[16px] text-[#A498B2] leading-[19px]'>Search for images </p>
                    </div>
                    <FiSearch className='ml-auto mr-[10px] '/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search