// import React from 'react'
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../../Component/Sidebar";
import Topheader from "../../Component/Topheader";
import Heading from "../../Component/Heading";
import job from '../../assets/Image/job.png'
import { TiLocation } from "react-icons/ti";
import { FaClock } from "react-icons/fa";
const Viewdetail = () => {
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
                                        <Heading title="View Detail  " />
                                    </div>
                                </div>
                                <div className="grid  grid-cols-1 ">
                                    <div className="col-span-1 mt-2">
                                        <div className="w-full bg-white rounded-[12px] p-4">

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
                                            <div className="p-3 border border-[#DDE2E4] rounded-[10px] mt-4">
                                                <p className="poppins font-[500] md:text-[18px] text-[15px] ">
                                                    Job Overview
                                                </p>
                                                <div className='mt-2 md:flex block gap-5 '>
                                                    {
                                                        ["Part - Time", "Remote", "Senior Level", "Salary 20,000 INR - 25,000 INR"].map((itm) => (
                                                            <>
                                                             
                                                              <button className='md:text-[14px] text-[12px] font-[500] bg-[#D7EBFF] rounded-[4px] px-3 py-1 cursor-pointer'>{itm}</button>
                                                             

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

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Viewdetail
