import { useState } from 'react'
import { IoMdClose } from "react-icons/io"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"



const Jobs = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <section className="">
                <div className="">
                    <div className="grid lg:grid-cols-12 grid-cols-10">
                        <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform col-span-2 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative col-span-2 overflow-y-auto`}>
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
                            <div className="grid grid-cols-1">
                                <div className="col-span-1 ">
                                    sdsfdf

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jobs
