import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { Country } from './ui/CountryOpt'

const countries = ["Lagos", "South Africa", "Ghana", "Rwanda", "....."]

const Header = () => {
  return (
    <section className=''>
        <div className='relative sm:h-[416px] z-10 h-[600px] mb-[100px]'>
            <div className='sm:h-full w-full '>
                <img className='w-full sm:h-full' src="/assets/Hero.png" alt="hero" />
            </div>
            <div className='absolute z-10 top-0 bottom-0 sm:px-4 right-0 left-0 flex justify-center items-center'>
                <div className=''>
                    <h1 className='font-bold sm:text-[34px] sm:leading-[40px] text-[48px] text-white leading-[56px]  '>Beautiful African <br className='hidden sm:block'/> Stock <br className='sm:hidden' /> Photograph <br className='hidden sm:block' /> and videos</h1>
                    <p className='font-semibold sm:font-normal sm:text-[18px] sm:leading-[22px] text-[20px] text-white leading-[24px] my-4 '>Royalty African photos and videos sorted by geographical location</p>
                    <div className='flex items-center bg-[#FAFAFB] rounded mb-6 sm:w-full w-[688px]'>
                        <div className='flex items-center'>
                            <div className='flex items-center mr-4 bg-[#F1F0F3] p-3 rounded-tl rounded-bl'>
                                <span className='font-semibold text-[16px] leading-[19px] '>All</span>
                                <BsChevronDown className='ml-5'/>
                            </div>
                            <p className='ml-auto font-semibold text-[16px] text-[#A498B2] leading-[19px]'>Search for images </p>
                        </div>
                        <FiSearch className='ml-auto mr-[10px] '/>
                    </div>
                    <div className=' sm:w-full sm:text-[14px] nobar sm:leading-[17px] overflow-x-scroll'>
                        <div className='flex items-center sm:w-[400px] space-x-4 '>
                            {countries.map(country => (
                                <Country country={country} key={country} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header