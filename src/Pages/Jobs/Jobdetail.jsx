// import React from 'react'

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../../Component/Sidebar";
import Topheader from "../../Component/Topheader";
import Heading from "../../Component/Heading";
import job from '../../assets/Image/job.png'
import { TiLocation } from "react-icons/ti";
import { FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { FiCalendar} from "react-icons/fi";
import { LuBriefcaseBusiness, LuTimer } from "react-icons/lu";
import { RiStackLine } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";


const Jobdetail = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <section className="">
                <div className="">
                    <div className="grid lg:grid-cols-12 grid-cols-10">
                        <div className={`bg-white shadow-lg z-50 transform col-span-2 
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
                                        <Heading title="Job Details " />
                                    </div>
                                </div>
                                <div className="grid  lg:grid-cols-12 grid-cols-1 bg-white rounded-[12px] p-4 gap-5" >
                                    <div className="lg:col-span-12 grid-cols-1 md:flex block justify-between">
                                        <div className="flex gap-3 items-center">
                                            <div className="icon bg-[#F5F3EA] rounded-[6px] md:p-3 p-2 flex items-center justify-center ">
                                                <img src={job} alt="company" className='md:h-[35px] h-[20px] md:w-[35px] w-[20px]' />
                                            </div>
                                            <div>
                                                <h1 className="poppins font-[600] md:text-[20px] text-[16px] text-[#110B08]">
                                                    Lead Product Designer
                                                </h1>
                                                <div className="flex items-center  ">

                                                    <div className="flex items-center ">
                                                        <TiLocation className="text-[#626263] md:text-lg text-md mr-1" />
                                                        <span className="text-[#626263] poppins font-[400] md:text-[14px] text-[12px] ">New Delhi, India</span>
                                                    </div>
                                                    <div className="flex items-center pl-4">
                                                        <FaClock className="text-[#626263] md:text-sm text-xs mr-1" />
                                                        <span className="text-[#626263] poppins font-[400] md:text-[14px] text-[12px]">5 days ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center mt:pt-0 pt-4">
                                            <div className="bg-[#D7EBFF]  rounded-[5px] p-2">
                                                <BsBookmark className='text-[#004080] md:text-[23px] text-[20px]' />
                                            </div>
                                            <button className="cursor-pointer text-[15px] font-[600] poppins bg-[#004080] text-white rounded-full py-2 px-10">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-8 col-span-1 mt-2">
                                        <div className="w-full ">
                                            <div className="p-3 border border-[#DDE2E4] rounded-[10px] mt-4">
                                                <p className="poppins font-[500] md:text-[18px] text-[15px] ">
                                                    Job Overview
                                                </p>
                                                <div className='mt-2 md:flex block gap-5'>
                                                    {
                                                        ["Part - Time", "Remote", "Senior Level", "Salary 20,000 INR - 25,000 INR"].map((itm) => (
                                                            <>
                                                                <button className='md:text-[13px] text-[12px] font-[500] bg-[#D7EBFF] rounded-[4px] px-3 py-1 cursor-pointer'>{itm}</button>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="py-4">
                                                <h2 className="font-[600] text-[18px] poppins">
                                                    About Company
                                                </h2>
                                                <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                                    UIHUT designers work with speed and efficiency to deliver the highest quality of work. We are looking for someone who is passionate about their client’s business, and ready to work on exciting projects with Fortune 500 companies and Silicon Valley startups, with great rates and zero hassles. If you are looking for a place to advance your career, enhance your skill set, and build connections around the globe, Slack is right for you.
                                                </p>
                                            </div>
                                            <div className="pb-4">
                                                <h2 className="font-[600] text-[18px] poppins">
                                                    About The Job
                                                </h2>
                                                <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                                    UIHUT designers work with speed and efficiency to deliver the highest quality of work. We are looking for someone who is passionate about their client’s business, and ready to work on exciting projects with Fortune 500 companies and Silicon Valley startups, with great rates and zero hassles. If you are looking for a place to advance your career, enhance your skill set, and build connections around the globe, Slack is right for you
                                                </p>
                                            </div>
                                            <div className="pb-4">
                                                <h2 className="font-[600] text-[18px] poppins">
                                                    Job Description
                                                </h2>
                                                <ul className="list-disc mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400] pl-5">
                                                    <li>
                                                        At least 3 years of professional experience as a Product Designer
                                                    </li>
                                                    <li>
                                                        Proven experience in all phases of the design process including user research, copywriting, wireframing, prototyping, visual design, interaction design, and usability testing
                                                    </li>
                                                    <li>
                                                        UI/UX/Interaction Design experience is required

                                                    </li>
                                                </ul>
                                                <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                                    If you’re interested in pursuing an engaging career working on full-time freelance jobs for exclusive clients, take the next step by clicking apply and filling out the short form to get started.
                                                </p>

                                            </div>
                                            <div className="pb-4">
                                                <h2 className="font-[600] text-[18px] poppins">
                                                    Qualifications
                                                </h2>
                                                <ul className="list-disc mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400] pl-5">
                                                    <li>
                                                        At least 3 years of professional experience as a Product Designer
                                                    </li>
                                                    <li>
                                                        Proven experience in all phases of the design process including user research, copywriting, wireframing, prototyping, visual design, interaction design, and usability testing
                                                    </li>
                                                    <li>
                                                        UI/UX/Interaction Design experience is required

                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pb-4">
                                                <h2 className="font-[600] text-[18px] poppins">
                                                    Experience
                                                </h2>
                                                <ul className="list-disc mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400] pl-5">
                                                    <li>
                                                        At least 3 years of professional experience as a Product Designer
                                                    </li>
                                                    <li>
                                                        Proven experience in all phases of the design process including user research, copywriting, wireframing, prototyping, visual design, interaction design, and usability testing
                                                    </li>
                                                    <li>
                                                        UI/UX/Interaction Design experience is required

                                                    </li>
                                                </ul>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 col-span-1 mt-6">
                                        <div className="w-full border border-[#DDE2E4] rounded-[8px] p-4">
                                            <h2 className="font-[500] text-[15px] poppins">
                                                Job Overview
                                            </h2>
                                            <div className="grid xl:grid-cols-3 grid-cols-2 gap-3">
                                                <div className="col-span-1 pt-3">
                                                    <FiCalendar className="text-[#004080] text-lg" />
                                                    <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                        Job Posted:
                                                    </p>
                                                    <p className="poppins font-[500] text-[12px]">
                                                        14 Jun, 2021
                                                    </p>
                                                </div>
                                                <div className="col-span-1 pt-3">
                                                    <LuTimer className="text-[#004080] text-lg" />
                                                    <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                        Job expire in:
                                                    </p>
                                                    <p className="poppins font-[500] text-[12px]">
                                                        14 Aug, 2021
                                                    </p>
                                                </div>
                                                <div className="col-span-1 pt-3">
                                                    <RiStackLine className="text-[#004080] text-lg" />
                                                    <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                        Job Level:
                                                    </p>
                                                    <p className="poppins font-[500] text-[12px]">
                                                        Entry Level
                                                    </p>
                                                </div>
                                                <div className="col-span-1 pt-3">
                                                    <RiStackLine className="text-[#004080] text-lg" />
                                                    <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                        Experience
                                                    </p>
                                                    <p className="poppins font-[500] text-[12px]">
                                                        $50k-80k/month
                                                    </p>
                                                </div>
                                                <div className="col-span-1 pt-3">
                                                    <LuBriefcaseBusiness className="text-[#004080] text-lg" />
                                                    <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                        Education
                                                    </p>
                                                    <p className="poppins font-[500] text-[12px]">
                                                        Graduation
                                                    </p>
                                                </div>
                                            </div>
                                            <h2 className="font-[500] text-[15px] poppins mt-3">
                                                Share this job:
                                            </h2>
                                            <div className="flex space-x-2 mt-3">
                                                {/* Copy Link Button */}
                                                <button className="cursor-pointer flex items-center gap-1 bg-[#D7EBFF] text-[#004080] px-4 py-1 rounded-[4px] text-sm font-medium hover:bg-[#004080] hover:text-white">
                                                    <AiOutlineLink className=" xl:text-lg text-md" />
                                                    <span>Copy Links</span>
                                                </button>

                                                {/* Social Media Icons */}
                                                <div className="flex space-x-2">
                                                    <div className="w-8 h-8 flex items-center justify-center bg-[#D7EBFF] text-[#004080] rounded-[4px] cursor-pointer hover:bg-[#004080] hover:text-white">
                                                        <FaFacebookF />
                                                    </div>
                                                    <div className="w-8 h-8 flex items-center justify-center bg-[#D7EBFF] text-[#004080] rounded-[4px] cursor-pointer hover:bg-[#004080] hover:text-white">
                                                        <FaTwitter />
                                                    </div>
                                                    <div className="w-8 h-8 flex items-center justify-center bg-[#D7EBFF] text-[#004080] rounded-[4px] cursor-pointer hover:bg-[#004080] hover:text-white">
                                                        <FaLinkedinIn />
                                                    </div>
                                                    <div className="w-8 h-8 flex items-center justify-center bg-[#D7EBFF] text-[#004080] rounded-[4px] cursor-pointer hover:bg-[#004080] hover:text-white">
                                                        <FaInstagram />
                                                    </div>
                                                </div>
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

export default Jobdetail
