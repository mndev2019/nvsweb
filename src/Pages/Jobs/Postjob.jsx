// import React from 'react'

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useState } from "react";
import { FiEdit } from "react-icons/fi"
import { IoMdClose } from "react-icons/io";
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"
import {  Dialog } from "@headlessui/react";
import Heading from "../../Component/Heading";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const Postjob = () => {
    const navigate = useNavigate();
    // const [data, setData] = useState("");
    const [showpostmodal, setshowpostmodal] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            {showpostmodal && (
                <Dialog open={showpostmodal} onClose={() => setshowpostmodal(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-[#000000c4] bg-opacity-70 flex flex-col items-center justify-center">
                        <div
                            className="bg-white p-5 rounded-2xl shadow-lg w-[350px] md:w-[450px] text-center cursor-pointer relative"

                        >
                            {/* Close Button */}
                            <button
                                className="cursor-pointer absolute top-[-17px] right-[-35px] text-[#18191C] hover:bg-gray-200 bg-white rounded-full p-1 transition"
                                onClick={() => setshowpostmodal(false)}
                            >
                                <IoClose size={20} />
                            </button>

                            <h2 className="text-[20px] font-[600] poppins">🎉 Congratulation, Your Job is Successfully Posted!</h2>
                            <p className="text-[#626263] font-[400] poppins text-[13px] py-4">
                                You can manage your form my-jobs section in your dashboard
                            </p>
                            <div className="pt-5">
                                <button className="bg-[#004080] cursor-pointer text-white font-[400] text-[15px] poppins py-2 px-8 rounded-full" onClick={() => navigate('/managejob')}>
                                    Manage your Jobs
                                </button>
                            </div>
                            <div className="py-5">
                                <button className="border border-[#004080] cursor-pointer text-[#004080]  font-[500] text-[15px] poppins py-2 px-8 rounded-full" onClick={() => navigate('/viewapplication')}>
                                    View Applicants
                                </button>
                            </div>

                        </div>
                    </div>
                </Dialog>
            )}

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
                              
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1">
                                        <Heading title="Post a Job" text="Find the best talent for your company" />
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
                                            className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                        />
                                    </div>
                                    <div className="col-span-2 mb-5">
                                        {/* Header with Edit Icon */}
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-black font-[500] md:text-[18px] text-[14px] poppins">Job Description</h3>
                                            <FiEdit className="text-[#8B7C7C] md:text-[20px] text-[15px]  cursor-pointer text-lg" />
                                        </div>

                                        {/* CKEditor for Job Description */}
                                        {/* <div className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] border border-[#0000001A] rounded-md bg-white p-2"> */}
                                        {/* <CKEditor
                                                editor={ClassicEditor}
                                                data={data}
                                                onChange={(event, editor) => setData(editor.getData())}
                                            /> */}
                                        <input
                                            type="text"
                                            placeholder="Enter Job Description"
                                            className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                        />
                                        {/* </div> */}
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
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select State</option>

                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[14px] text-black font-[500] poppins mb-1">City</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
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
                                            className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

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
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select Qualification</option>

                                                </select>
                                            </div>
                                            <div>
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Experience</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Experience"
                                                    className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

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
                                                    className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Salary Range (Optional)</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Salary Range (Optional)"
                                                    className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border  border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]"

                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Day Shift</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select Day Shift</option>

                                                </select>
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block md:text-[14px] text-[12px] text-black font-[500] poppins mb-1">Type of Job</label>
                                                <select className="shadow-[0px_4px_62px_0px_rgba(153,171,198,0.18)] poppins md:text-[15px] text-[12px] font-[400] w-full md:p-3 p-2  border border-[#0000001A] bg-white rounded-md outline-none focus:ring-2 focus:ring-[#004080]">
                                                    <option>Select</option>

                                                </select>
                                            </div>
                                            <div className="col-span-1">
                                                <button onClick={() => setshowpostmodal(true)} className="w-full rounded-full py-2 text-[16px] font-[500] poppins text-white bg-[#004080] cursor-pointer " style={{ boxShadow: '0px 1px 2px 0px #6951FF0D' }}>Post a Job</button>
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
