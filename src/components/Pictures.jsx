import React from 'react'

const Pictures = () => {
  return (
    <section className='px-8 sm:px-4 overflow-y-scroll h-[1564px] nobar'>
        <div className='sm:block grid grid-cols-4 gap-x-5'>
            <div className='flex flex-col gap-y-5'>
                <img src="/assets/col1-img1.png" alt="people" />
                <img src="/assets/col1-img2.png" alt="people" />
                <img src="/assets/col1-img3.png" alt="people" />
                <img src="/assets/col1-img4.png" alt="people" />
            </div>

            <div className='flex flex-col gap-y-5'>
                <img src="/assets/col2-img1.png" alt="people" />
                <img src="/assets/col2-img2.png" alt="people" />
                <img src="/assets/col2-img3.png" alt="people" />
                <img src="/assets/col2-img4.png" alt="people" />
            </div>

            <div className='flex flex-col gap-y-5'>
                <img src="/assets/col3-img1.png" alt="people" />
                <img src="/assets/col3-img2.png" alt="people" />
                <img src="/assets/col3-img3.png" alt="people" />
                <img src="/assets/col3-img4.png" alt="people" />
            </div>

            <div className='flex flex-col gap-y-5'>
                <div className='flex justify-center items-center box-shadow bg-white py-9 '>
                    <div>
                        <h2 className='font-bold text-[23px] leading-[28px]'>Want to submit a photo?</h2>
                        <p className='font-normal text-[16px] text-[#7A6A8E] leading-[19px] my-4'>We're always looking for talented <br /> photographers to join our team</p>
                        <button className='font-semibold text-[16px] leading-[19px] py-2 px-[90px] bg-[#8A50FC] text-white rounded '>Contact Us</button>
                    </div>
                </div>
                <img src="/assets/col4-img1.png" alt="people" />
                <img src="/assets/col4-img2.png" alt="people" />
                <img src="/assets/col4-img3.png" alt="people" />
            </div>
        </div>
    </section>
  )
}

export default Pictures