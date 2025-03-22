// import React from 'react'
import { BsBookmark } from 'react-icons/bs'
import job from '../../assets/Image/job.png'
import { TiLocation } from 'react-icons/ti'
import { FaClock } from 'react-icons/fa'

const Jobbox = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    [1, 2, 3, 4, 5, 6].map(() => (
                        <>
                            <div className="col-span-1 mt-2">
                                <div className="w-full bg-white rounded-[12px] p-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <div className="icon bg-[#F5F3EA] rounded-[6px] md:p-3 p-2 flex items-center justify-center ">
                                                <img src={job} alt="company" className='md:h-[35px] h-[20px] md:w-[35px] w-[20px]' />
                                            </div>
                                            <div>
                                                <h1 className="poppins font-[600] md:text-[20px] text-[16px] text-[#110B08]">
                                                    Lead Product Designer
                                                </h1>
                                                <p className="text-[#004080] poppins font-[500] md:text-[12px] text-[10px]">
                                                    Salary: 20,000 INR - 25,000 INR
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <BsBookmark className='text-[#ACB2B9] md:text-[27px] text-[20px]' />
                                        </div>
                                    </div>
                                    <p className='text-[#626263] md:text-[15px] text-[12px] text-justify font-[400] poppins py-4 border-b border-[#ACB2B999]'>
                                        We are looking for a lead product designer. A good suitable professional person for this very important role. Anyone can apply for this...
                                    </p>
                                    <div className='mt-3 flex gap-5'>
                                        <button className='md:text-[14px] text-[12px] font-[500] bg-[#BEDFFF] rounded-[4px] px-3 py-1 cursor-pointer'>Full - Time</button>
                                        <button className='md:text-[14px] text-[12px] font-[500] bg-[#BEDFFF] rounded-[4px] px-3 py-1  cursor-pointer'>Remote</button>
                                    </div>

                                    <div className="flex items-center  py-3">

                                        <div className="flex items-center ">
                                            <TiLocation className="text-[#626263] md:text-lg text-md mr-1" />
                                            <span className="text-[#626263] poppins font-[400] md:text-[14px] text-[12px] ">New Delhi, India</span>
                                        </div>
                                        <div className="flex items-center pl-4">
                                            <FaClock className="text-[#626263] md:text-sm text-xs mr-1" />
                                            <span className="text-[#626263] poppins font-[400] md:text-[14px] text-[12px]">5 days ago</span>
                                        </div>
                                    </div>
                                    <div className='w-full flex gap-4 md:mt-3 mt-2'>
                                        <button className='w-full poppins font-[600] md:text-[15px] text-[12px] border border-[#110B08] rounded-[6px] md:px-3 px-2 py-2  cursor-pointer'>
                                            View Details
                                        </button>
                                        <button className='w-full poppins font-[600] md:text-[15px] text-[12px] bg-[#004080] text-white rounded-[6px] md:px-3 px-2 py-2 cursor-pointer'>
                                            Apply Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </>
    )
}

export default Jobbox
