import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { FiMenu, FiSearch } from 'react-icons/fi'

const navOpts = ["Use case", "About", "Contact us"]

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [currentNav, setCurrentNav] = useState(0)

  return (
    <section className='bg-[#FFFFFF] z-20 py-[30px] px-8 sm:px-4 '>
        <div className='sm:hidden flex items-center justify-between'>
            <div className='flex items-center bg-[#FAFAFB] '>
                <h1 className='font-bold text-[23px] leading-[28px] mr-6 '>Bondastocks</h1>
                <div className='flex items-center bg-[#F1F0F3] p-3 mr-4'>
                    <span>All</span>
                    <BsChevronDown className='ml-5' />
                </div>
                <p className='font-semibold text-[16px] text-[#A498B2] leading-[19px]'>Search for images </p>
                
            </div>

            <div className='relative flex items-center font-semibold text-[16px] leading-[19px]'>
                <FiSearch className='relative bottom-[-2px] mr-[43px]' />
                <div className='pt-2 flex items-center space-x-3'>
                    {navOpts.map((opt, index) => (
                        <>
                            <p 
                                key={opt} 
                                onClick={() => setCurrentNav(index)}
                                style={{borderBottom: currentNav === index? "2px solid black" : ""}} 
                                className='hover:border-b-2 hover:border-black pb-2 cursor-pointer'>{opt}</p>
                        </>
                    ))}
                </div>
                <button className='mx-6 bg-[#8A50FC] text-white py-2 px-3 rounded '>+ Submit</button>
                <div className='w-10 h-10 rounded-[50%] mr-[5px]'>
                    <img src="/assets/profile.png" alt="profile" />
                </div>
                <BsChevronDown />
            </div>
        </div>

        <div className='hidden sm:flex  justify-between'>
            <div className='flex items-center'>
                <FiMenu onClick={() => setShowNav(true)} className='h-6 w-6 mr-4' />
                <h1 className='font-bold text-[23px] leading-[28px] mr-6 '>Bondastocks</h1>
            </div>
            <div className='flex items-center'>
                <div className='w-10 h-10 rounded-[50%] mr-[5px]'>
                    <img src="/assets/profile.png" alt="profile" />
                </div>
                <BsChevronDown />
            </div>
        </div>

        <div 
            className='fixed z-20 transition-all duration-700 top-0 h-full left-0 w-full'
            style={{transform: showNav? "translateY(0)" : "translateY(-100%)"}}
        >
            <div onClick={() => setShowNav(false)} className='w-full h-full'></div>
            <div 
                // style={{transform: showNav? "translateX(0)" : "translateX(100%)"}} 
                className='absolute top-0 left-0 right-0 z-50 bg-[#F1F0F3] p-[30px] pt-[45px]'
            >
                
                <MdOutlineCancel onClick={() => setShowNav(false)} className='absolute h-5 w-5 top-4 right-4'/>
                <div className='font-medium text-[18px] text-center space-y-1 mb-2'>
                    {navOpts.map((opt, index) => (
                        <>
                            <p 
                                key={opt} 
                                onClick={() => setCurrentNav(index)}
                                style={{borderBottom: currentNav === index? "2px solid black" : ""}} 
                                className='hover:border-b-2 hover:border-black pb-2 cursor-pointer'>{opt}</p>
                        </>
                    ))}
                    {/* <p className='hover:border-b-2 pb-2 cursor-pointer'>About us</p>
                    <p className='hover:border-b-2 pb-2 cursor-pointer'>Contact us</p> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar