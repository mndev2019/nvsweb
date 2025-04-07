// import React from 'react'

import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEye } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

import user from '../../assets/Svg/Users.svg'
import { useNavigate } from "react-router-dom";

const JobList = () => {
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    const jobs = [
        { title: "UI/UX Designer", type: "Full Time", days: "27 days remaining", applications: 798 },
        { title: "Senior UX Designer", type: "Internship", days: "8 days remaining", applications: 185 },
        { title: "Junior Graphic Designer", type: "Full Time", days: "24 days remaining", applications: 583 }
    ];
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6">
                {/* Header */}
                <div className="md:flex block justify-between items-center  pb-4">
                    <h2 className="inter md:text-[18px] text-[15px] font-[500]">
                        My Jobs <span className="text-[#9199A3]">(589)</span>
                    </h2>
                    <div className="flex gap-2 items-center md:py-0 py-2">
                        <p className="poppins font-[500] text-[14px]">
                            Job status
                        </p>
                        <select className="text-[#626263] poppins font-[400] text-[14px] border border-[#DDE2E4] rounded-[4px] md:px-4 px-2 md:py-2 py-1">
                            <option value="alljobs">All jobs</option>
                            <option value="active">Active</option>
                            <option value="expire">Expire</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-[#474C54] poppins">
                        <thead className="bg-[#F1F2F4] text-[12px] font-[300] rounded-[4px] *:text-nowrap *:text-[#474C54]">
                            <tr>
                                <th className="py-3 px-4">JOBS</th>
                                <th className="py-3 px-4">STATUS</th>
                                <th className="py-3 px-4">APPLICATIONS</th>
                                <th className="py-3 px-4">ACTIONS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={index} className="border-b-2 border-[#F1F2F4] *:text-nowrap">
                                    {/* JOBS */}
                                    <td className="py-4 px-4">
                                        <h3 className="font-[500] md:text-[16px] text-[13px] text-black">{job.title}</h3>
                                        <p className="text-[#767F8C] md:text-[14px] text-[12px] font-[400]">{job.type} • {job.days}</p>
                                    </td>

                                    {/* STATUS */}
                                    <td className="py-4 px-4 text-[#0BA02C] font-medium">
                                        <div className="flex items-center gap-1">
                                            <FaRegCheckCircle className="text-[#0BA02C]" />
                                            Active
                                        </div>
                                    </td>

                                    {/* APPLICATIONS */}
                                    <td className="py-4 px-4 text-[#626263] font-[400] inter md:text-[14px] text-[12px]">
                                        <div className="flex items-center">
                                            <img src={user} alt="user" className="mr-2" />
                                            {job.applications} Applications
                                        </div>
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="py-4 px-4 relative">
                                        <div className="flex items-center justify-between">
                                            <button
                                                className="text-[#004080] font-medium bg-[#F1F2F4] px-4 py-2 rounded-[3px] hover:bg-[#004080] hover:text-white md:text-[14px] text-[12px]"
                                                onClick={() => navigate('/viewapplication')}
                                            >
                                                View Applications
                                            </button>

                                            <BsThreeDotsVertical
                                                className="text-gray-500 cursor-pointer ml-2"
                                                onClick={() => toggleDropdown(index)}
                                            />
                                        </div>

                                        {/* Dropdown */}
                                        {openDropdown === index && (
                                            <div className="absolute right-[50px] mt-2 w-40 bg-white shadow-lg rounded-md z-10" style={{ boxShadow: "0px 12px 32px 0px rgba(24, 25, 28, 0.08)" }}>
                                                <ul className="py-2 text-sm text-gray-700">
                                                    <li
                                                        className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#E7F0FA] hover:text-[#004080]"
                                                        onClick={() => navigate('/viewdetails')}
                                                    >
                                                        <AiOutlineEye className="mr-2 text-[#5E6670]" /> View Detail
                                                    </li>
                                                    <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#E7F0FA] hover:text-[#004080]">
                                                        <AiOutlineCloseCircle className="mr-2 text-[#5E6670]" /> Make it Expire
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>




            </div>
        </>
    )
}

export default JobList
