// import React from 'react'
import Titlecomp from "../../Component/Titlecomp"
import forum1 from '../../assets/Image/forum1.png'
import user from '../../assets/Image/team5.png'
import { CiCalendar } from "react-icons/ci"
import { BiLike } from "react-icons/bi"
import { TbMessageDots } from "react-icons/tb"
import { PiShareFat } from "react-icons/pi"


const Forum = () => {

    return (
        <>
            <section className="w-full pb-4">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 py-3">
                        <div className="col-span-1">
                            <div className="w-full flex justify-between">
                                <Titlecomp title="Forum" />
                                <div className="flex gap-3 items-center mt-2">
                                    <p className="inter font-[600] text-[18px] text-[#0B067C]">
                                        See All
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-3 bg-white rounded-[14px] p-4 ">
                        <div className="flex items-center gap-4">
                            <img src={user} alt="User" className="h-[66px] w-[66px] rounded-full" />
                            <div>
                                <h3 className="text-[18px] font-[500] poppins">Rahul Kumar</h3>
                                <div className="flex gap-2 items-center">
                                    <CiCalendar className="text-[20px] text-[#535974]" />
                                    <p className="text-[14px] text-[#535974] font-[400] inter">Feb 20, 2025 • 01:00 PM </p>

                                </div>
                                <p className="text-[14px] text-[#767F8C] font-[400] inter">
                                    by Equitymaster</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-[20px] font-[600] inter">Breaking News</h4>
                            <p className="text-[14px] inter font-[400] text-[#535974] mt-2">
                                Lorem ipsum dolor sit amet consectetur. Dolor id morbi aliquam praesent nam et consectetur sagittis quam.. Urna cras in libero egestas sit non ac lobortis pellentesque.. Pulvinar semper donec etiam lobortis amet vulputate tellus nisl.. Nibh aliquam faucibus consectetur eget nunc laoreet..
                            </p>
                        </div>
                        <div className="mt-4">
                            <img src={forum1} alt="News" className="w-full h-[322px] rounded-lg object-cover" />
                        </div>
                        <div className="flex justify-between items-center mt-4 text-gray-500">
                            <div className="flex items-center gap-5">
                                <div className="flex  gap-1 items-center">
                                    <BiLike className="text-[23px]" /> <span className="inter text-[#535974] font-[500] text-[16px]">25 Likes</span>
                                </div>
                                <div className="flex  gap-1 items-center">
                                    <TbMessageDots className="text-[23px]" /> <span className="inter text-[#535974] font-[500] text-[16px]">14 comments</span>
                                </div>
                                <div className="flex  gap-1 items-center">
                                    <PiShareFat className="text-[23px]" /> <span className="inter text-[#535974] font-[500] text-[16px]">14 Shares</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Forum
