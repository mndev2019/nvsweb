// import React from 'react'

import { IoMdClose } from "react-icons/io"
import Sidebar from "../../Component/Sidebar"
import { useState } from "react";
import Topheader from "../../Component/Topheader"
import Heading from "../../Component/Heading"
import user from '../../assets/Image/team2.png'
import { HiOutlineDotsVertical } from "react-icons/hi";

const Friends = () => {
    const [active, setActive] = useState("My Friends")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <section className="">
                <div className="">
                    <div className="grid lg:grid-cols-12 grid-cols-10">
                        <div className={`bg-white shadow-lg z-50 transform col-span-2 custom-scrollbar 
                                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                                           transition-transform duration-300 ease-in-out lg:translate-x-0 
                                              fixed top-0 left-0 h-full lg:h-screen lg:sticky lg:top-0 overflow-y-auto`}>
                            <div className="p-2 lg:hidden  flex justify-end items-end">
                                <IoMdClose
                                    className="text-black text-end text-[24px] cursor-pointer"
                                    onClick={toggleSidebar}
                                />
                            </div>
                            <Sidebar />
                        </div>
                        <div className="col-span-10 bg-[#f8f4fc] ">
                            <Topheader toggleSidebar={toggleSidebar} />
                            <div className="p-4">
                                <div className="grid grid-cols-1 pb-5">
                                    <div className="col-span-1">
                                        <Heading title="Friends " text="You have 20 friends" />
                                    </div>
                                    <div className="bg-white rounded-[6px] py-2 px-5 flex justify-between mt-3">
                                        {["My Friends", "Received", "Sent"].map((itm) => (
                                            <button
                                                key={itm}
                                                onClick={() => setActive(itm)}
                                                className={`inter sm:px-6 px-3 py-2 rounded-[5px] ${active === itm
                                                    ? "bg-[#004080] sm:text-[14px] text-[12px] font-[500] text-white"
                                                    : "text-[#535974] font-[400] text-[16px] bg-transparent"
                                                    }`}
                                            >
                                                {itm}
                                            </button>
                                        ))}
                                    </div>

                                    {active === "My Friends" && (
                                        <div className="bg-white rounded-[14px] mt-4 px-3 pt-3 pb-6">
                                            {[1, 2, 3, 4].map((_, i) => (
                                                <div key={i} className="flex justify-between border-b border-[#D6DDEB] py-3 items-center">
                                                    <div className="flex items-center gap-4">
                                                        <img src={user} alt="User" className="h-[50px] w-[50px] rounded-full" />
                                                        <div>
                                                            <h3 className="md:text-[17px] text-[15px] font-[500] poppins">Rahul Kumar</h3>
                                                            <p className="md:text-[14px] text-[12px] text-[#767F8C] font-[400] inter">
                                                                Jawahar Navodaya Vidyalaya, Basti
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <HiOutlineDotsVertical className="text-[20px] text-[#767F8C]" />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {active === "Received" && (
                                        <div className="bg-white rounded-[14px] mt-4 px-3 pt-3 pb-6">
                                            {[1, 2].map((_, i) => (
                                                <div key={i} className="md:flex block justify-between border-b border-[#D6DDEB] md:py-3 py-5 items-center">
                                                    <div className="flex items-center gap-4">
                                                        <img src={user} alt="User" className="h-[50px] w-[50px] rounded-full" />
                                                        <div>
                                                            <h3 className="md:text-[17px] text-[15px] font-[500] poppins">Rahul Kumar</h3>
                                                            <p className="md:text-[14px] text-[12px] text-[#767F8C] font-[400] inter">
                                                                Jawahar Navodaya Vidyalaya, Basti
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 md:pt-0 pt-3">
                                                        <button className="text-white cursor-pointer poppins font-[500] md:text-[14px] text-[13px] bg-[#004080] md:px-6 px-5 md:py-2 py-1 rounded-[6px]">
                                                            Accept
                                                        </button>
                                                        <button className="text-black cursor-pointer poppins font-[500] md:text-[14px] text-[13px] border border-[#110b0880] md:px-6 px-5 md:py-2 py-1 rounded-[6px]">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {active === "Sent" && (
                                        <div className="bg-white rounded-[14px] mt-4 px-3 pt-3 pb-6">
                                            <h2 className="font-[600] md:text-[18px] text-[15px] inter">
                                                26 March 2025
                                            </h2>
                                            {[1, 2].map((_, i) => (
                                                <div key={i} className="flex justify-between border-b border-[#D6DDEB] py-3 items-center">
                                                    <div className="flex items-center gap-4">
                                                        <img src={user} alt="User" className="h-[50px] w-[50px] rounded-full" />
                                                        <div>
                                                            <h3 className="md:text-[17px] text-[14px] font-[500] poppins">Friend request sent to Rahul Kumar</h3>

                                                        </div>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Friends

