// import React from 'react'
import { useState } from 'react'
import { BiSearch } from "react-icons/bi"

import { IoMdClose } from "react-icons/io"
import { IoLocationOutline } from "react-icons/io5"
import { LuBriefcaseBusiness } from "react-icons/lu"
import Jobbox from "./Jobbox"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"
import { FaFilter } from 'react-icons/fa'
import Heading from '../../Component/Heading'


const Getjob = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showFilter, setshowFilter] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleFilter = () => {
        setshowFilter(!showFilter);
    };
    return (
        <>
            <section className="">
                <div className="">
                    <div className="grid lg:grid-cols-12 grid-cols-10">
                        <div className={`bg-white shadow-lg z-50 transform col-span-2 custom-scrollbar 
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
              transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative 
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
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1">
                                    <Heading title="Get a Job" text="   Search for your desired job matching your skills" />
                                      
                                    </div>
                                    <div className="col-span-1">
                                        <div className="bg-white shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] rounded-lg mt-6 p-3 flex flex-col md:flex-row md:items-center gap-4 max-w-[90%] xl:max-w-[75%] lg:max-w-[85%] mx-auto">

                                            {/* Job Title Input - First Line */}
                                            <div className="flex items-center border-b md:border-b-0 md:border-r border-[#626263] pb-2 md:pb-0 pr-4 w-full md:w-1/3">
                                                <BiSearch className="text-[#626263] md:text-[20px] text-[18px] mr-2" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter Job Title"
                                                    className="outline-none w-full text-[#626263] poppins md:text-[18px] text-[14px] font-[400]"
                                                />
                                            </div>

                                            {/* Location & Experience - Second Line on Mobile */}
                                            <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-4">

                                                {/* Location Input */}
                                                <div className="flex items-center border-b md:border-b-0 md:border-r border-[#626263] pb-2 md:pb-0 pr-4 w-full md:w-1/2">
                                                    <IoLocationOutline className="text-[#626263] md:text-[20px] text-[18px] mr-2" />
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Location"
                                                        className="outline-none w-full text-[#626263] poppins md:text-[18px] text-[14px] font-[400]"
                                                    />
                                                </div>

                                                {/* Experience Input */}
                                                <div className="flex items-center w-full md:w-1/2">
                                                    <LuBriefcaseBusiness className="text-[#626263] md:text-[20px] text-[18px] mr-2" />
                                                    <input
                                                        type="text"
                                                        placeholder="Years of Experience"
                                                        className="outline-none w-full text-[#626263] poppins md:text-[18px] text-[14px] font-[400]"
                                                    />
                                                </div>
                                            </div>

                                            {/* Search Button */}
                                            <button className="bg-[#004080] text-white px-8 py-2 rounded-md poppins md:text-[16px] text-[12px] font-[400] cursor-pointer w-full md:w-auto">
                                                Search
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-1 lg:hidden block ">
                                    <div className="col-span-1 py-5 justify-items-end justify-between flex">
                                        <p className='text-lg poppins font-semibold'>
                                            Filter
                                        </p>
                                        <FaFilter className='text-[#004080] text-xl' onClick={toggleFilter} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 lg:mt-9 mt-0 gap-4 ">

                                    <div className={`fixed top-0 right-0 h-full w-3/4 sm:w-2/4 md:w-1/3  transform 
                                     ${showFilter ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out 
                                        lg:relative lg:translate-x-0 lg:w-full lg:col-span-3 lg:block lg:bg-transparent lg:overflow-y-auto overflow-y-scroll bg-white lg:p-0 p-4`}>

                                        {/* Close Button for Small Screens */}
                                        <div className="p-2 lg:hidden flex justify-end">
                                            <IoMdClose
                                                className="text-[20px] text-[#004080] cursor-pointer"
                                                onClick={toggleFilter}
                                            />
                                        </div>

                                        <h2 className="text-lg font-semibold mb-4">Filter</h2>
                                        <div className="bg-white p-4 shadow-lg rounded-lg w-full">
                                            {/* Salary Range */}
                                            <div className="mb-4">
                                                <label className="text-[14px] font-[600] poppins">Salary Range</label>
                                                <div className="flex gap-2 mt-2">
                                                    <input type="text" placeholder="Min" className="border border-[#DDE2E4] p-2 rounded w-full text-[14px] inter font-[400] focus:outline-none focus:ring-2 focus:ring-[#004080]" />
                                                    <input type="text" placeholder="Max" className="border border-[#DDE2E4] p-2 rounded w-full text-[14px] inter font-[400] focus:outline-none focus:ring-2 focus:ring-[#004080]" />
                                                </div>
                                            </div>

                                            <div className="pb-4 border-b border-[#ACB2B999] pt-3">
                                                <label className="text-[14px] font-[600] poppins">Job Type</label>
                                                <div className="flex flex-col mt-2 text-[14px] font-[400] text-[#626263] poppins">
                                                    {["Full-Time (654)", "Part-Time (124)", "Internship (204)", "Contract (32)"].map((type, index) => (
                                                        <label key={index} className="flex items-center space-x-2">
                                                            <input type="checkbox" className="accent-[#004080]" />
                                                            <span>{type}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>


                                            <div className="pb-4 border-b border-[#ACB2B999] pt-3">
                                                <label className="text-[14px] font-[600] poppins ">Work Mode</label>
                                                <div className="flex flex-col mt-2 text-[14px] font-[400] text-[#626263] poppins">
                                                    {["On-Site", "Remote", "Hybrid (203)"].map((mode, index) => (
                                                        <label key={index} className="flex items-center space-x-2">
                                                            <input type="checkbox" className="accent-[#004080]" />
                                                            <span>{mode}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>


                                            <div className="pb-4 border-b border-[#ACB2B999] pt-3">
                                                <label className="text-[14px] font-[600] poppins">Job Functions</label>
                                                <div className="flex flex-col mt-2 text-[14px] font-[400] text-[#626263] poppins">
                                                    {["Marketing (8)", "Technology (14)", "Design (10)", "Sales (7)", "Customer Service (9)"].map((func, index) => (
                                                        <label key={index} className="flex items-center space-x-2">
                                                            <input type="checkbox" className="accent-[#004080]" />
                                                            <span>{func}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>


                                            <div className="pb-4 border-b border-[#ACB2B999]">
                                                <label className="text-[14px] font-[600] poppins">Experience Level</label>
                                                <div className="flex flex-col mt-2 text-[14px] font-[400] text-[#626263] poppins">
                                                    {["Entry-Level (289)", "Mid-Level (122)", "Senior-Level (34)", "Leadership/Executive (20)"].map((exp, index) => (
                                                        <label key={index} className="flex items-center space-x-2">
                                                            <input type="checkbox" className="accent-[#004080]" />
                                                            <span>{exp}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>


                                            <div className="mt-4">
                                                <button className="w-full bg-[#004080] text-white py-2 rounded text-sm font-medium poppins" onClick={toggleFilter}>
                                                    Apply
                                                </button>
                                                <button className="w-full mt-2 bg-gray-200 py-2 rounded text-sm font-medium poppins" onClick={toggleFilter}>
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-9 col-span-12">
                                        <Jobbox />
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

export default Getjob
