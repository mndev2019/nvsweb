// import React from 'react'

import { IoMdClose } from "react-icons/io"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"
import Heading from "../../Component/Heading"
import { useState } from "react"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { AiOutlineDownload } from "react-icons/ai"
import profile from '../../assets/Image/team2.png'
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri"
import { IoAddCircleOutline } from "react-icons/io5"
import Applicationpopup from "./Applicationpopup"

const ViewApplication = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            {isPopupOpen && <Applicationpopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />}
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
                                        <Heading title="View Applications" btn="Post a Job" />
                                    </div>
                                </div>
                                <div className="bg-white  rounded-lg p-6">
                                    <div className="grid grid-cols-1">
                                        <div className="col-span-1">
                                            <div className="">
                                                {/* Header */}
                                                <div className="flex justify-between items-center  pb-4">
                                                    <h2 className="inter md:text-[18px] text-[15px] font-[500]">
                                                        All Applications <span className="text-[#9199A3]">(589)</span>
                                                    </h2>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                                        <div className="col-span-1">
                                            <div className="w-full rounded-[6px] border border-[#E4E5E8] p-5 bg-gray-100">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-[500] text-[14px] poppins">
                                                        All Applications (213)
                                                    </p>
                                                    <HiOutlineDotsHorizontal className="text-[#767F8C] text-lg" />

                                                </div>
                                                {
                                                    [1, 2, 3, 4].map(() => (
                                                        <>
                                                            <div className="mt-4 p-4 border border-[#E4E5E8] rounded-lg  bg-white" style={{ boxShadow: "0px 3px 16px 0px rgba(24, 25, 28, 0.04)" }} onClick={() => setIsPopupOpen(true)}>
                                                                <div className="flex items-center" >
                                                                    <img
                                                                        src={profile}
                                                                        alt="Profile"
                                                                        className="w-10 h-10 rounded-full"
                                                                    />
                                                                    <div className="ml-3">
                                                                        <p className="font-[500] poppins text-[14px]">Ronald Richards</p>
                                                                        <p className="text-[#626263] font-[400] text-[14px] inter">UI/UX Designer</p>
                                                                    </div>
                                                                </div>
                                                                <hr className="my-2 border-gray-300" />
                                                                <ul className="text-[#626263] font-[400] text-[14px] inter list-disc pl-5">
                                                                    <li>7 Years Experience</li>
                                                                    <li>Education: Master Degree</li>
                                                                    <li>Applied: Jan 23, 2022</li>
                                                                </ul>
                                                                <a
                                                                    href="#"
                                                                    className="mt-3 flex items-center text-[#004080] font-[500] inter text-[14px]"
                                                                >
                                                                    <AiOutlineDownload className="mr-1 text-lg" />
                                                                    Download Cv
                                                                </a>
                                                            </div>
                                                        </>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                        <div className="col-span-1 relative">
                                            <div className="w-full rounded-[6px] border border-[#E4E5E8] p-5 bg-gray-100">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-[500] text-[14px] poppins">
                                                        Shortlisted (2)
                                                    </p>
                                                    <HiOutlineDotsHorizontal className="text-[#767F8C] text-lg" onClick={() => toggleDropdown(0)} />

                                                </div>
                                                {/* Dropdown Menu (Only for the clicked item) */}
                                                {openDropdown === 0 && (
                                                    <div className="absolute right-[10px]   w-40 bg-white shadow-lg rounded-md  z-10" style={{ boxShadow: "0px 12px 32px 0px rgba(24, 25, 28, 0.08)" }}>
                                                        <ul className="py-2 text-sm text-gray-700">

                                                            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#E7F0FA] hover:text-[#004080]" >
                                                                <RiEdit2Line className="mr-2 text-[#5E6670]" />Edit Column
                                                            </li>
                                                            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#E7F0FA] text-[#E05151]">
                                                                <RiDeleteBinLine className="mr-2 text-[#E05151]" /> Delete
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {
                                                    [1, 2].map(() => (
                                                        <>
                                                            <div className="mt-4 p-4 border border-[#E4E5E8] rounded-lg  bg-white" style={{ boxShadow: "0px 3px 16px 0px rgba(24, 25, 28, 0.04)" }}>
                                                                <div className="flex items-center">
                                                                    <img
                                                                        src={profile}
                                                                        alt="Profile"
                                                                        className="w-10 h-10 rounded-full"
                                                                    />
                                                                    <div className="ml-3">
                                                                        <p className="font-[500] poppins text-[14px]">Ronald Richards</p>
                                                                        <p className="text-[#626263] font-[400] text-[14px] inter">UI/UX Designer</p>
                                                                    </div>
                                                                </div>
                                                                <hr className="my-2 border-gray-300" />
                                                                <ul className="text-[#626263] font-[400] text-[14px] inter list-disc pl-5">
                                                                    <li>7 Years Experience</li>
                                                                    <li>Education: Master Degree</li>
                                                                    <li>Applied: Jan 23, 2022</li>
                                                                </ul>
                                                                <a
                                                                    href="#"
                                                                    className="mt-3 flex items-center text-[#004080] font-[500] inter text-[14px]"
                                                                >
                                                                    <AiOutlineDownload className="mr-1 text-lg" />
                                                                    Download Cv
                                                                </a>
                                                            </div>
                                                        </>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="w-full justify-center rounded-[6px] border border-[#E4E5E8] p-3 bg-gray-100 flex items-center gap-3">
                                                <IoAddCircleOutline className="text-[#004080] text-[30px]" />
                                                <p className="font-[500] text-[14px] poppins">
                                                    Create New Column
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}

export default ViewApplication
