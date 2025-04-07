/* eslint-disable react/prop-types */
// import React from 'react'

import { Dialog } from "@headlessui/react"
import { IoArrowForwardCircleOutline, IoClose, IoDocumentTextOutline } from "react-icons/io5"
import user from '../../assets/Image/team4.png'
import { TfiEmail } from "react-icons/tfi"
import { FiDownload, FiGlobe,FiMap} from "react-icons/fi"

import { RiStackLine } from "react-icons/ri"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"
import { PiCake, PiClipboardTextLight, PiGraduationCapLight, PiMapPinLine} from "react-icons/pi"
import { HiOutlineUserCircle } from "react-icons/hi"
import { BiPhoneCall } from "react-icons/bi"

const Applicationpopup = ({ isOpen , onClose }) => {
    return (
        <>
            <Dialog open={isOpen} onClose={onClose} className="relative z-50">
                <div className="fixed inset-0 bg-[#000000c4] bg-opacity-70 flex flex-col items-center py-10 overflow-y-auto">
                    <div
                        className="bg-white p-5 rounded-2xl shadow-lg md:w-[70%] w-[90%]  cursor-pointer relative "

                    >
                        {/* Close Button */}
                        <button
                            className="cursor-pointer absolute md:top-[-17px] top-[15px] md:right-[-35px] right-[20px] text-[#18191C] hover:bg-gray-200 bg-white rounded-full p-1 transition"
                            onClick={onClose}
                        >
                            <IoClose size={20} />
                        </button>

                        <div className="lg:flex block justify-between  py-3 items-center">
                            <div className="flex items-center gap-3">
                                <img src={user} alt="User" className="h-[50px] w-[50px] rounded-full" />
                                <div>
                                    <h3 className="md:text-[17px] text-[15px] font-[500] poppins">Rahul Kumar</h3>
                                    <p className="md:text-[14px] text-[12px] text-[#767F8C] font-[400] inter">
                                        UI/UX Designer
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex block gap-4 lg:mt-0 mt-4 ">
                                <button className="cursor-pointer md:text-[15px] text-[12px] font-[500] poppins text-[#004080] border border-[#004080] rounded-full md:py-2 py-1 md:px-4 px-3 flex items-center gap-1">
                                    <TfiEmail className="md:text-[18px] text-[13px] font-[500]" />
                                    Send Mail
                                </button>
                               <div className="md:pt-0 pt-3">
                               <button className="cursor-pointer md:text-[15px] text-[12px] font-[400] poppins bg-[#004080] text-white rounded-full md:py-2 py-1 md:px-4 px-3 flex items-center gap-1">
                                    <IoArrowForwardCircleOutline className="text-[18px]" />
                                    Hire Candidates
                                </button>
                               </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-12 grid-cols-1  gap-5">
                            <div className="lg:col-span-8 col-span-1 mt-2">
                                <div className="w-full ">

                                    <div className="py-4 border-b border-[#D6DDEB]">
                                        <h2 className="font-[600] text-[16px] poppins">
                                            BIOGRAPHY
                                        </h2>
                                        <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                            I&apos;ve been passionate about UI/UX design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.
                                        </p>
                                    </div>
                                    <div className="py-4 border-b border-[#D6DDEB]">
                                        <h2 className="font-[600] text-[16px] poppins">
                                            COVER LETTER
                                        </h2>
                                        <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                            Dear Sir,
                                        </p>
                                        <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                            I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice
                                            posted on JobZone, IPFW’s job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.
                                        </p>
                                        <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                            I have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.
                                        </p>
                                        <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                            Sincerely,
                                        </p>
                                        <p className="text-justify mt-3 text-[#626263] md:text-[14px] text-[12px] poppins font-[400]">
                                            Esther Howard
                                        </p>
                                    </div>
                                    <h2 className="font-[500] text-[15px] poppins mt-3">
                                        Follow me on Social Media
                                    </h2>
                                    <div className="flex space-x-2 mt-3">


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
                                            <div className="w-8 h-8 flex items-center justify-center bg-[#D7EBFF] text-[#004080] rounded-[4px] cursor-pointer hover:bg-[#004080] hover:text-white">
                                                <FaYoutube />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-1 mt-6">

                                <div className="space-y-4 text-[#0A0A1F] text-[14px] font-[400] poppins">
                                    <div className="w-full border border-[#DDE2E4] rounded-[8px] p-4">

                                        <div className="grid grid-cols-2">
                                            <div className="col-span-1 pt-3">
                                                <PiCake className="text-[#004080] text-lg" />
                                                <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                    DATE OF BIRTH
                                                </p>
                                                <p className="poppins font-[500] text-[12px]">
                                                    14 June, 2021
                                                </p>
                                            </div>
                                            <div className="col-span-1 pt-3">
                                                <FiMap className="text-[#004080] text-lg" />
                                                <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                    Nationality
                                                </p>
                                                <p className="poppins font-[500] text-[12px]">
                                                    Bangladesh
                                                </p>
                                            </div>
                                            <div className="col-span-1 pt-3">
                                                <PiClipboardTextLight className="text-[#004080] text-lg" />
                                                <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                    marital Status
                                                </p>
                                                <p className="poppins font-[500] text-[12px]">
                                                    Single
                                                </p>
                                            </div>
                                            <div className="col-span-1 pt-3">
                                                <HiOutlineUserCircle className="text-[#004080] text-lg" />
                                                <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                    Gender
                                                </p>
                                                <p className="poppins font-[500] text-[12px]">
                                                    Male
                                                </p>
                                            </div>
                                            <div className="col-span-1 pt-3">
                                                <RiStackLine className="text-[#004080] text-lg" />
                                                <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                    Experience
                                                </p>
                                                <p className="poppins font-[500] text-[12px]">
                                                    7 Years
                                                </p>
                                            </div>
                                            <div className="col-span-1 pt-3">
                                                <PiGraduationCapLight className="text-[#004080] text-lg" />
                                                <p className="text-[#626263] font-[400] inter text-[12px] pt-1">
                                                    Education
                                                </p>
                                                <p className="poppins font-[500] text-[12px]">
                                                    Master Degree
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    {/* Download Resume */}
                                    <div className="bg-white rounded-lg p-4 border border-[#DDE2E4]">
                                        <h2 className="text-[14px] font-[500] poppins mb-3">Download My Resume</h2>
                                        <div className="flex items-center justify-between  rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <IoDocumentTextOutline className="text-[#004080] text-[35px]" />
                                                <div>
                                                    <p className="font-[400] inter text-[12px] text-[#626263]">Esther Howard</p>
                                                    <p className="text-[14px] font-[500] poppins">PDF</p>
                                                </div>
                                            </div>
                                            <button className="p-2 text-[#004080] rounded-md bg-[#D7EBFF]">
                                                <FiDownload />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="bg-white rounded-lg p-4 border border-[#DDE2E4] space-y-5">
                                        <h2 className="text-[14px] font-[500] poppins ">Contact Information</h2>

                                        {/* Website */}
                                        <div className="flex items-start gap-3">
                                            <FiGlobe className="text-[#004080] text-[20px]" />
                                            <div>
                                                <p className="text-[12px] font-[400] inter text-[#626263]">WEBSITE</p>
                                                <p className="font-[500] text-[14px] poppins">www.estherhoward.com</p>
                                            </div>
                                        </div>
                                        <hr />

                                        {/* Location */}
                                        <div className="flex items-start gap-3">
                                            <PiMapPinLine className="text-[#004080] text-[35px]" />
                                            <div>
                                                <p className="text-[12px] font-[400] inter text-[#626263]">LOCATION</p>
                                                <p className="font-[500] text-[14px] poppins">Beverly Hills, California 90202</p>
                                                <p>Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland,</p>
                                            </div>
                                        </div>
                                        <hr />

                                        {/* Phone */}
                                        <div className="flex items-start gap-3">
                                            <BiPhoneCall className="text-[#004080] text-[20px]" />
                                            <div>
                                                <p className="text-[12px] font-[400] inter text-[#626263]">PHONE</p>
                                                <p className="font-[500] text-[14px] poppins">+1-202-555-0141</p>
                                                <p className="text-[12px] font-[400] inter text-[#626263]">SECONDARY PHONE</p>
                                                <p className="font-[500] text-[14px] poppins">+1-202-555-0189</p>
                                            </div>
                                        </div>
                                        <hr />

                                        {/* Email */}
                                        <div className="flex items-start gap-3">
                                            <TfiEmail className="text-[#004080] text-[20px]" />
                                            <div>
                                                <p className="text-[12px] font-[400] inter text-[#626263]">EMAIL ADDRESS</p>
                                                <p className="font-[500] text-[14px] poppins">esther.howard@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Applicationpopup
