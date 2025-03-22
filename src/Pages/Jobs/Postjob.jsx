// import React from 'react'

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { FiEdit } from "react-icons/fi"
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"


const Postjob = () => {
    const [description, setDescription] = useState("");
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
                                        <div className="w-full flex items-baseline md:gap-5 gap-2">
                                            {/* Back Arrow */}
                                            <IoIosArrowBack className="text-[#004080] text-[20px] cursor-pointer" />

                                            {/* Header Text */}
                                            <div>
                                                <h2 className="md:text-[30px] text-[20px] font-[600] inter">Post a Job</h2>
                                                <p className="md:text-[18px] text-[12px] font-[400] poppins text-[#8B7C7C]  cursor-pointer">
                                                    Find the best talent for your company
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-cols-2 mt-5">
                                    <div className="col-span-2 mb-5">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins">Company Details</h3>
                                            <FiEdit className="text-[#8B7C7C] md:text-[20px] text-[15px] cursor-pointer text-lg" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter Company Name"
                                            className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2 border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                        />
                                    </div>
                                    <div className="col-span-2 mb-5">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins">About Company</h3>
                                            <FiEdit className="text-[#8B7C7C] md:text-[20px] text-[15px]  cursor-pointer text-lg" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter About Company"
                                            className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                        />
                                    </div>
                                    <div className="col-span-2 mb-5">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins">About Job</h3>
                                            <FiEdit className="text-[#8B7C7C] md:text-[20px] text-[15px]  cursor-pointer text-lg" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter Job Title"
                                            className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                        />
                                    </div>
                                    <div className="col-span-2 mb-5">
                                        {/* Header with Edit Icon */}
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins">Job Description</h3>
                                            <FiEdit className="text-[#8B7C7C] md:text-[20px] text-[15px]  cursor-pointer text-lg" />
                                        </div>

                                        {/* CKEditor for Job Description */}
                                        <div className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] border border-[#0000001A] rounded-md bg-white p-2">
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={description}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    setDescription(data);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 mb-5">

                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins  ">
                                                Location
                                            </h3>
                                            <FiEdit className="text-[#8B7C7C] md:text-[20px] text-[15px]  cursor-pointer text-lg" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">

                                            <div>
                                                <label className="block text-[14px] text-black font-[500] poppins mb-1">State</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select State</option>

                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[14px] text-black font-[500] poppins mb-1">City</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select City</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 mb-5">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins">Pincode</h3>
                                            <FiEdit className="text-[#8B7C7C] md:text-[20px] text-[15px]  cursor-pointer text-lg" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter Pincode"
                                            className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                        />
                                    </div>
                                    <div className="col-span-2 mb-5">

                                        <div className=" mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins  ">
                                                Qualification & Experience
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">

                                            <div>
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Qualification</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select Qualification</option>

                                                </select>
                                            </div>
                                            <div>
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Experience</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Experience"
                                                    className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 mb-5">

                                        <div className=" mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins  ">
                                                Additional Detail
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:gap-5 gap-2">

                                            <div className="col-span-1">
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Number of Opening</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Number of Opening"
                                                    className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Salary Range (Optional)</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Salary Range (Optional)"
                                                    className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Day Shift</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select Day Shift</option>

                                                </select>
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Type of Job</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppinsmd:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select</option>

                                                </select>
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

export default Postjob
