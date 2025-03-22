// import React from 'react'

import { IoMdClose } from "react-icons/io"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"
import { useState } from "react";
// import forum from "../Home/Forum"
import Forumbox from "./Forumbox";

const Forum = () => {
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
                                <Forumbox/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forum
