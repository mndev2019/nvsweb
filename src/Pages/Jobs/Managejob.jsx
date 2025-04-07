// import React from 'react'

import { IoMdClose } from "react-icons/io"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"
import Heading from "../../Component/Heading"
import { useState } from "react"
import JobList from "./JobList"

const Managejob = () => {
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
                                        <Heading title="Manage Jobs " btn="Post a Job" />
                                    </div>
                                </div>
                                <div className="grid-cols-1">
                                    <div className="col-span-1">
                                        <JobList/>
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

export default Managejob
