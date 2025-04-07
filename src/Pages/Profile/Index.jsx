// import React, { useState } from 'react'

import { IoMdClose } from "react-icons/io"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"
import Heading from "../../Component/Heading"
import { useState } from "react"
import profile from '../../assets/Image/team4.png'
import { RiDeleteBin5Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"


const Profile = () => {
    const [active, setActive] = useState("Personal Information")
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
                                        <Heading title="Profile" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-12 grid-cols-1 gap-3 min-h-[80vh]">
                                    <div className="md:col-span-2 col-span-1">
                                        <div className="w-full md:bg-white bg-transparent p-2 rounded-[14px] text-center h-full ">
                                            <div className="relative">
                                            <img src={profile} alt="image " className="h-[100px] w-[100px] mx-auto" />
                                            <div className="bg-white absolute bottom-0 md:right-[20%] sm:right-[42%] right-[33%] h-[30px] w-[30px] rounded-full flex items-center justify-center border border-[#004080]">
                                                <FiEdit className="text-[#004080]" />
                                            </div>
                                            </div>
                                            <h2 className="inter font-[600] text-[14px] md:mt-4 mt-3">
                                                Meera Saini
                                            </h2>
                                            <p className="text-[#0A0A1F] poppins font-[400] text-[12px]">
                                                Student
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-10 col-span-1">
                                        <div className="bg-white rounded-[6px] py-1 px-2 flex justify-between overflow-x-scroll text-nowrap custom-scrollbar">
                                            {["Personal Information", "Address", "Academic Information", "Professional Information", "Additional Information", "Business"].map((itm) => (
                                                <button
                                                    key={itm}
                                                    onClick={() => setActive(itm)}
                                                    className={`inter px-6 py-2 rounded-[5px] ${active === itm
                                                        ? "bg-[#004080] md:text-[14px] text-[12px] font-[500] text-white"
                                                        : "text-[#535974] font-[400] text-[15px] bg-transparent"
                                                        }`}
                                                >
                                                    {itm}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-1">
                                            {
                                                active === "Personal Information" && (
                                                    <>
                                                        <div className="col-span-1 py-4">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Name</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter Name"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Mobile Number</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter Mobile Number"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Email Address</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter Email"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                active === "Address" && (
                                                    <>
                                                        <div className="col-span-1 py-4">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Street Address</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter Street Address"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Select State</h3>
                                                            <select
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"
                                                            >
                                                                <option value="">Select State</option>

                                                            </select>
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Select City</h3>
                                                            <select
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"
                                                            >
                                                                <option value="">Select</option>

                                                            </select>
                                                        </div>


                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Pincode</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter Pincode"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                active === "Academic Information" && (
                                                    <>
                                                        <div className="col-span-1 py-4">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Qualified Year</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Qualified Year"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Education</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Education"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                active === "Professional Information" && (
                                                    <>
                                                        <div className="col-span-1 py-4">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Current Employer</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Current Employer"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Job Title</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Job Title"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Industry</h3>
                                                            <select
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"
                                                            >
                                                                <option value="">Select State</option>

                                                            </select>
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Years of Experience</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Years of Experience"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>




                                                    </>
                                                )
                                            }
                                            {
                                                active === "Additional Information" && (
                                                    <>
                                                        <div className="col-span-1 py-4">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">LinkedIn Profile</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your LinkedIn Profile"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Professional Achievements</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Professional Achievements"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Date of Birth</h3>
                                                            <input
                                                                type="date"
                                                                placeholder="Select your Date of Birth"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"
                                                            />
                                                        </div>

                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Emergency Contact Number</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Emergency Contact Number"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins mb-2">Gender</h3>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <label className="flex items-center gap-2 w-full p-3 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2    cursor-pointer  shadow-[0px_4px_62px_0px_rgba(153,171,198,0.10)]">
                                                                    <input
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="male"
                                                                        className="accent-[#004080]"
                                                                    />
                                                                    <span className="text-sm text-gray-800 poppins">Male</span>
                                                                </label>

                                                                <label className="flex items-center gap-2 w-full p-3 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2    cursor-pointer  shadow-[0px_4px_62px_0px_rgba(153,171,198,0.10)]">
                                                                    <input
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="female"
                                                                        className="accent-[#004080]"
                                                                    />
                                                                    <span className="text-sm text-gray-800 poppins">Female</span>
                                                                </label>
                                                            </div>
                                                        </div>


                                                    </>
                                                )
                                            }
                                            {
                                                active === "Business" && (
                                                    <>
                                                        <div className="col-span-1 py-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Company Name</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Company Name"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>
                                                        <div className="col-span-1 pb-3">
                                                            <h3 className="text-black font-[500] md:text-[15px] text-[14px] poppins">Company Turnover</h3>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your Company Turnover"
                                                                className="mt-1 shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[14px] text-[12px] font-[400] w-full p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                            />
                                                        </div>

                                                    </>
                                                )
                                            }

                                            <div className="col-span-1 mt-10">
                                                <div className="w-full">
                                                    <button className="bg-[#FFDEDE] rounded-full text-[#E05151] w-full md:py-3 py-2 px-4 flex items-center justify-center gap-2 poppins font-[500] md:text-[15px] text-[13px]">
                                                        <RiDeleteBin5Line className="md:text-[17px] text-[14px]" />
                                                        Delete Account
                                                    </button>
                                                    <button className="mt-4 rounded-full bg-[#004080] w-full md:py-3 py-2 px-4 poppins font-[500]  md:text-[15px] text-[13px] text-white">

                                                        Submit
                                                    </button>
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

export default Profile
