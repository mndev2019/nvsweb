// import React from 'react'

import { IoMdClose } from "react-icons/io"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"
import Heading from "../../Component/Heading"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import user from '../../assets/Image/team4.png'
import { VscSend } from "react-icons/vsc"


const Inbox = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const userList = [
        "Jan Mayer", "Joe Bartmann", "Ally Wales", "James Gardner", "Allison Geidt",
        "Ruben Culhane", "Lydia Diaz", "James Dokidis", "Angelina Swann","Jan Mayer", "Joe Bartmann", "Ally Wales", "James Gardner", "Allison Geidt",
        "Ruben Culhane", "Lydia Diaz", "James Dokidis", "Angelina Swann",
    ];
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <section className="">
                <div className="">
                    <div className="grid lg:grid-cols-12 grid-cols-10">
                        <div className={`bg-white shadow-lg z-50 transform col-span-2  custom-scrollbar
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
                                        <Heading title="Inbox " />
                                    </div>
                                </div>
                                {/* <div className="grid md:grid-cols-12 grid-cols-1 h-screen font-sans">
                                   
                                    <div className="md:col-span-4 col-span-1 border-r border-[#D6DDEB] bg-white rounded-[10px]">
                                        <div className="p-4">
                                            <div className="flex items-center gap-2 border border-[#DDE2E4] rounded-[6px] px-3 py-2">
                                                <FiSearch className="text-[#8B7C7C] text-[18px]" />
                                                <input
                                                    type="text"
                                                    placeholder="Search messages"
                                                    className="w-full outline-none text-[14px] font-[400] poppins text-[#8B7C7C] bg-transparent"
                                                />
                                            </div>
                                        </div>

                                        <ul className="overflow-y-scroll custom-scrollbar h-[calc(100vh-70px)]">
                                            {[
                                                "Jan Mayer",
                                                "Joe Bartmann",
                                                "Ally Wales",
                                                "James Gardner",
                                                "Allison Geidt",
                                                "Ruben Culhane",
                                                "Lydia Diaz",
                                                "James Dokidis",
                                                "Angelina Swann",
                                                "Jan Mayer",
                                                "Joe Bartmann",
                                                "Ally Wales",
                                                "James Gardner",
                                                "Allison Geidt",
                                                "Ruben Culhane",
                                                "Lydia Diaz",
                                                "James Dokidis",
                                                "Angelina Swann",
                                            ].map((name, idx) => (
                                                <li
                                                    key={idx}
                                                    className={`flex items-center gap-3 p-4 hover:bg-blue-100 cursor-pointer ${idx === 0  ? "bg-blue-100" : ""
                                                        }`}
                                                >
                                                    <img src={user} className="w-10 h-10 bg-gray-300 rounded-full" />
                                                    <div className="flex-1">
                                                        <h4 className="text-sm font-medium">{name}</h4>
                                                        <p className="text-xs text-gray-500 truncate">
                                                            Hey thanks for your interview...
                                                        </p>
                                                    </div>
                                                    <span className="text-xs text-gray-400">3:40 PM</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                   
                                    <div className="md:col-span-8 col-span-1 flex flex-col bg-gray-50">
                                       
                                        <div className="flex justify-between items-center p-4 border-b border-[#D6DDEB] bg-white">
                                            <div className="flex items-center gap-4">
                                                <img src={user} className="w-10 h-10 bg-gray-300 rounded-full" />
                                                <div className="">
                                                    <h2 className="font-[600] poppins text-[14px]">Jan Mayer</h2>
                                                    <p className="text-xs text-[#515B6F] inter">Designer Candidate</p>
                                                </div>
                                            </div>
                                            <button className="text-[#004080] poppins text-sm font-medium">View Profile</button>
                                        </div>
                                        <div className="text-center pt-4">
                                            <img src={user} alt="image" className="h-[50px] w-[50px] rounded-full mx-auto" />
                                            <h2 className="font-[600] poppins text-[14px]">Jan Mayer</h2>
                                            <p className="text-xs text-[#515B6F] inter">Designer Candidate</p>
                                        </div>

                                      
                                        <div className="flex-1 px-6 py-4 overflow-y-auto">
                                            <div className="text-center mb-6">
                                                <button className="text-sm text-gray-600 border px-4 py-1 rounded-md">
                                                    Today ▼
                                                </button>
                                            </div>

                                            
                                            <div className="flex flex-col items-end gap-2 mb-6">
                                                <div className="flex gap-2 items-center">
                                                    <h2 className="poppins font-[600] text-[14px]">
                                                        You
                                                    </h2>
                                                    <img src={user} className="w-8 h-8 bg-gray-300 rounded-full" />

                                                </div>
                                                <div className="bg-[#D7EBFF] text-[#535974] px-4 py-2 rounded-md text-sm w-fit">
                                                    Hey Jan, I wanted to reach out because we saw your work contributions
                                                    and were impressed by your work.
                                                </div>
                                                <div className="bg-[#D7EBFF] text-[#535974] px-4 py-2 rounded-md text-sm w-fit">
                                                    We want to invite you for a quick interview
                                                </div>
                                                <span className="text-xs text-gray-400 mt-1">12 mins ago</span>
                                            </div>
                                            

                                            
                                            <div className="flex items-start gap-2">
                                                <img src={user} className="w-8 h-8 bg-gray-300 rounded-full" />
                                                <div>
                                                    <h2 className="poppins font-[600] text-[14px]">
                                                        Jan Mayer
                                                    </h2>
                                                    <div className="bg-white border border-[#D6DDEB] text-[#535974] px-4 py-2 rounded-md text-sm max-w-md">
                                                        Hi Maria, sure I would love to. Thanks for taking the time to see
                                                        my work!
                                                    </div>
                                                    <span className="text-xs text-gray-400 mt-1 block">12 mins ago</span>
                                                </div>
                                            </div>
                                        </div>

                                       
                                        <div className="p-4 bg-white">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="text"
                                                    placeholder="Reply message"
                                                    className="flex-1 px-4 py-2 border border-[#D6DDEB]  text-sm inter"
                                                />
                                                <button className="bg-[#004080] py-2 px-5  text-white">
                                                    <VscSend className="text-lg font-bold" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="grid md:grid-cols-12 grid-cols-1 ">
                                    {/* Left Sidebar */}
                                    <div
                                        className={`md:col-span-4 col-span-1 border-r border-[#D6DDEB] bg-white rounded-[10px] 
                                              ${selectedUser ? "hidden" : "block"} md:block`}
                                    >
                                        <div className="p-4">
                                            <div className="flex items-center gap-2 border border-[#DDE2E4] rounded-[6px] px-3 py-2">
                                                <FiSearch className="text-[#8B7C7C] text-[18px]" />
                                                <input
                                                    type="text"
                                                    placeholder="Search messages"
                                                    className="w-full outline-none text-[14px] font-[400] poppins text-[#8B7C7C] bg-transparent"
                                                />
                                            </div>
                                        </div>

                                        <ul className="overflow-y-scroll custom-scrollbar h-[calc(100vh-70px)]">
                                            {userList.map((name, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() => setSelectedUser(name)}
                                                    className={`flex items-center gap-3 p-4 hover:bg-blue-100 cursor-pointer ${selectedUser === name ? "bg-blue-100" : ""
                                                        }`}
                                                >
                                                    <img src={user} className="w-10 h-10 bg-gray-300 rounded-full" />
                                                    <div className="flex-1">
                                                        <h4 className="text-sm font-medium">{name}</h4>
                                                        <p className="text-xs text-gray-500 truncate">
                                                            Hey thanks for your interview...
                                                        </p>
                                                    </div>
                                                    <span className="text-xs text-gray-400">3:40 PM</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right Chat Panel */}
                                    <div
                                        className={`md:col-span-8 col-span-1 flex flex-col h-screen bg-gray-50 
                                         ${selectedUser ? "block" : "hidden"} md:flex`}
                                    >
                                        {/* Header */}
                                        <div className="flex justify-between items-center p-4 border-b border-[#D6DDEB] bg-white">
                                            <div className="flex items-center gap-4">
                                                <img src={user} className="w-10 h-10 bg-gray-300 rounded-full" />
                                                <div className="">
                                                    <h2 className="font-[600] poppins text-[14px]">{selectedUser}</h2>
                                                    <p className="text-xs text-[#515B6F] inter">Designer Candidate</p>
                                                </div>
                                            </div>
                                            <button className="text-[#004080] poppins text-sm font-medium">View Profile</button>
                                        </div>
                                        <div className="text-center pt-4">
                                            <img src={user} alt="image" className="h-[50px] w-[50px] rounded-full mx-auto" />
                                            <h2 className="font-[600] poppins text-[14px]">{selectedUser}</h2>
                                            <p className="text-xs text-[#515B6F] inter">Designer Candidate</p>
                                        </div>
                                      
                                        <div className="flex-1 px-6 py-4 overflow-y-auto">
                                            <div className="text-center mb-6">
                                                <button className="text-sm text-gray-600 border px-4 py-1 rounded-md">
                                                    Today ▼
                                                </button>
                                            </div>

                                            
                                            <div className="flex flex-col items-end gap-2 mb-6">
                                                <div className="flex gap-2 items-center">
                                                    <h2 className="poppins font-[600] text-[14px]">
                                                        You
                                                    </h2>
                                                    <img src={user} className="w-8 h-8 bg-gray-300 rounded-full" />

                                                </div>
                                                <div className="bg-[#D7EBFF] text-[#535974] px-4 py-2 rounded-md text-sm w-fit">
                                                    Hey Jan, I wanted to reach out because we saw your work contributions
                                                    and were impressed by your work.
                                                </div>
                                                <div className="bg-[#D7EBFF] text-[#535974] px-4 py-2 rounded-md text-sm w-fit">
                                                    We want to invite you for a quick interview
                                                </div>
                                                <span className="text-xs text-gray-400 mt-1">12 mins ago</span>
                                            </div>
                                            

                                            
                                            <div className="flex items-start gap-2">
                                                <img src={user} className="w-8 h-8 bg-gray-300 rounded-full" />
                                                <div>
                                                    <h2 className="poppins font-[600] text-[14px]">
                                                        Jan Mayer
                                                    </h2>
                                                    <div className="bg-white border border-[#D6DDEB] text-[#535974] px-4 py-2 rounded-md text-sm max-w-md">
                                                        Hi Maria, sure I would love to. Thanks for taking the time to see
                                                        my work!
                                                    </div>
                                                    <span className="text-xs text-gray-400 mt-1 block">12 mins ago</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message Input */}
                                        <div className="p-4 bg-white">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="text"
                                                    placeholder="Reply message"
                                                    className="flex-1 px-4 py-2 border border-[#D6DDEB] text-sm inter"
                                                />
                                                <button className="bg-[#004080] py-2 px-5 text-white">
                                                    <VscSend className="text-lg font-bold" />
                                                </button>
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

export default Inbox
