// import React from 'react'

import { FiSearch } from "react-icons/fi"
import notification from '../assets/Image/notification-bing.svg'
import message from '../assets/Svg/message-text.svg'
import profile from '../assets/Image/team3.png'
import { CiMenuBurger } from "react-icons/ci"

// eslint-disable-next-line react/prop-types
const Topheader = ({ toggleSidebar }) => {
    return (
        <>
            <section className="pt-4 px-4">
                <div className="">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-8">
                            <div className="flex items-center  gap-4">
                                <CiMenuBurger
                                    className="text-black text-[20px] lg:hidden block cursor-pointer"
                                    onClick={toggleSidebar}
                                />
                                <div className="relative w-full">
                                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B7C7C]" />
                                    <input
                                        type="text"
                                        placeholder="Search here ..."
                                        className="w-full poppins py-4 pl-10 pr-4 rounded-full bg-white  focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="flex items-center justify-evenly bg-white rounded-full py-1 gap-1 px-1">
                                <div className="border border-[#DEDEDE] rounded-[100px] lg:px-1 xl:px-5 py-2">
                                    <img src={notification} alt="notification" />
                                </div>
                                <div className="border border-[#DEDEDE] rounded-[100px] lg:px-1 xl:px-5 py-2">
                                    <img src={message} alt="notification" />
                                </div>


                                <img src={profile} alt="profile" className="h-[45px] w-[45px]" />
                                <p className="poppins text-[#001F3F] font-[400] text-[14px]">
                                    Meera Saini
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Topheader
