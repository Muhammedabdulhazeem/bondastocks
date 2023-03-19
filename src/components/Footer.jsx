import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FiLinkedin, FiTwitter } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <section>
        <div className='text-white bg-[#1D2134] text-[16px] leading-[19px]'>
            <div className='flex sm:block py-[60px] px-8'>
                <div className='flex sm:block sm:space-y-8 sm:mb-8'>
                    <div className='mr-[90px]'>
                        <h2 className='font-bold text-[23px] leading-[28px] mb-4'>Bondastocks</h2>
                        <p>Beautiful African Photos Sorted by <br /> geographical locations </p>
                    </div>

                    <div className='space-y-4 mr-[130px]'>
                        <h2 className='font-semibold text-[19px] leading-[23px]'>Company</h2>
                        <p>About Us</p>
                        <p>Frequently asked question</p>
                        <p>Conatct Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms and conditions</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='font-semibold text-[19px] leading-[23px]'>Popular Categories</h2>
                        <p>Lagos Photos</p>
                        <p>Ghana Photos</p>
                        <p>Rwanda Photos</p>
                        <p>South Africa Photos</p>
                    </div>
                </div>

                <div className='ml-auto'>
                    <p className='font-semibold text-[19px] leading-[23px] mb-4'>Contact Us</p>
                    <div className='flex items-center space-x-4'>
                        <FiTwitter />
                        <BsInstagram />
                        <AiOutlineMail />
                        <FiLinkedin />
                    </div>
                </div>
            </div>

            <div className='sm:block flex text-[14px] px-8 justify-between bg-[#111529] py-6'>
                <p>Copyright@2022 Bondastocks</p>
                <p>Specific Moments Captured</p>
            </div>
        </div>
    </section>
  )
}

export default Footer