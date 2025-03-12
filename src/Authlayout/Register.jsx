// import React from 'react'
import signin from '../assets/Image/signin.png';
import logo from '../assets/Image/logo.png'
import { FaCheckCircle, FaCircle, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState("Alumni");
    const [selectedStatus, setSelectedStatus] = useState("Serving");
    return (
        <>
            <section className="signin  overflow-hidden">
                <div className="container max-w-full h-full">
                    <div className="grid md:grid-cols-2 grid-cols-1  h-full items-center">
                        <div className="col-span-1 flex flex-col items-center  text-center">
                            <div className=" ">
                                <img src={logo} alt='image' className='h-[120px] mx-auto' />
                                <h2 className='md:text-[30px] text-[20px] inter font-[700] md:mt-8 mt-4'>
                                    Register as
                                </h2>

                                <div className='flex gap-5 mt-4 '>
                                    {
                                        ["Alumni", "Faculty", "student"].map((itm, index) => (
                                            <>
                                                <button
                                                    key={index}
                                                    onClick={() => setActiveButton(itm)}
                                                    className={`poppins rounded-[90px] flex gap-2 py-1 px-5 items-center transition-all duration-300
                                                       ${activeButton === itm
                                                            ? "bg-gradient-to-r from-[#D5ECFD] to-[#EFEEEE] text-[#1B3981]"
                                                            : "bg-gradient-to-r from-[#EFEEEE] to-[#EFEEEE] text-[#978C8C]"
                                                        }`}
                                                >
                                                    {activeButton === itm ? (
                                                        <FaCheckCircle className="text-[#1B3981]" />
                                                    ) : (
                                                        <FaCircle className="text-[#928B8B]" />
                                                    )}
                                                    {itm}
                                                </button>
                                            </>
                                        ))
                                    }

                                </div>
                                {
                                    activeButton == "Alumni" && (
                                        <>
                                            <div className="mt-5 text-left">
                                                <select
                                                    className="w-full py-3 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E] bg-gray-100 text-[#212121B2] Inter text-[16px] font-[400]"
                                                >
                                                    <option value="" selected>
                                                        Select JNV District
                                                    </option>

                                                </select>
                                            </div>
                                            <div className="mt-5 text-left">
                                                <select
                                                    className="w-full py-3 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E] bg-gray-100 text-[#212121B2] Inter text-[16px] font-[400]"
                                                >
                                                    <option value="" selected>
                                                        Select JNV Name
                                                    </option>

                                                </select>
                                            </div>
                                            <div className="flex items-center space-x-10 mt-5">
                                                <div className="text-left flex flex-col">
                                                    <label className="text-[#212121] text-[16px] font-[500]">Batch</label>
                                                    <select className="w-[150px] py-2 px-3 border border-[#0000001A] rounded-[8px] bg-[#F8F9FB] text-[#212121B2] text-[16px] font-[400] appearance-none">
                                                        <option value="" selected>--</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                    </select>
                                                </div>

                                                <span className="text-[#212121B2] text-[16px] font-[400] mt-4">To</span>

                                                <div className="text-left mt-5">
                                                    <select className="w-[150px] py-2 px-3 border border-[#0000001A] rounded-[8px] bg-[#F8F9FB] text-[#212121B2] text-[16px] font-[400] appearance-none">
                                                        <option value="" selected>--</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='mt-10'>
                                                <button className='poppins text-[16px] font-[500] rounded-full bg-[#0B067C] w-full text-white py-3' onClick={()=> navigate('/home')}>Submit for Approval</button>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    activeButton == "Faculty" && (
                                        <>
                                            <div className="flex flex-col space-y-4 mb-5">
                                                {/* Radio Buttons */}
                                                <div className="flex items-center space-x-6 mt-4">
                                                    {
                                                        ["Serving", "Retired"].map((itm) => (
                                                            <>
                                                                <label key={itm} className="flex items-center space-x-2 cursor-pointer">
                                                                    <input
                                                                        type="radio"
                                                                        name="status"
                                                                        value={itm}
                                                                        checked={selectedStatus === itm}
                                                                        onChange={() => setSelectedStatus(itm)}
                                                                        className="hidden poppins text-[16px] font-[400] text-[#212121B2]"
                                                                    />
                                                                    <span
                                                                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selectedStatus === itm ? "border-[#1B3981]" : "border-gray-400"
                                                                            }`}
                                                                    >
                                                                        {selectedStatus === itm && (
                                                                            <span className="w-2 h-2 bg-[#1B3981] rounded-full"></span>
                                                                        )}
                                                                    </span>
                                                                    <span className="text-[#212121] text-[16px] font-[500]">{itm}</span>
                                                                </label>
                                                            </>
                                                        ))
                                                    }



                                                </div>
                                                {
                                                    selectedStatus === "Retired" && (
                                                        <>
                                                            <select className="w-full py-3 px-4 border border-[#0000001A] rounded-[10px] bg-[#F8F9FB] text-[#212121B2] text-[16px] font-[400] ">
                                                                <option value="" selected>
                                                                    Last JNV
                                                                </option>
                                                            </select>
                                                            <div className='text-end'>
                                                                <button className="inline-flex items-center gap-2 px-5 py-2 bg-[#0B067C] text-white text-[12px] font-[400] rounded-full poppins">
                                                                    <FaPlus />  Add More
                                                                </button>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                {
                                                    selectedStatus === "Serving" && (
                                                        <>
                                                            <select className="w-full py-3 px-4 border border-[#0000001A] rounded-[10px] bg-[#F8F9FB] text-[#212121B2] text-[16px] font-[400] ">
                                                                <option value="" selected>
                                                                    Current JNV
                                                                </option>
                                                            </select>
                                                            <div className='text-end'>
                                                                <button className="inline-flex items-center gap-2 px-5 py-2 bg-[#0B067C] text-white text-[12px] font-[400] rounded-full poppins">
                                                                    <FaPlus />  Add More
                                                                </button>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                <div className='mt-10'>
                                                    <button className='poppins text-[16px] font-[500] rounded-full bg-[#0B067C] w-full text-white py-3' onClick={()=> navigate('/home')}>Submit for Approval</button>
                                                </div>



                                                {/* Add More Button */}

                                            </div>

                                        </>
                                    )
                                }
                                {
                                    activeButton == "student" && (
                                        <>
                                            <p className='inter text-[18px] font-[400] text-[#8B7C7C] mt-5'>
                                                please select the course/program you pursued
                                            </p>
                                            <div className="mt-5 text-left">
                                                <select
                                                    className="w-full py-3 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E] bg-gray-100 text-[#212121B2] inter text-[16px] font-[400]"
                                                >
                                                    <option value="" selected>
                                                        Select Location of the Institution
                                                    </option>

                                                </select>
                                            </div>
                                            <div className="mt-5 text-left">
                                                <select
                                                    className="w-full py-3 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E] bg-gray-100 text-[#212121B2] Inter text-[16px] font-[400]"
                                                >
                                                    <option value="" selected>
                                                        Select Institution
                                                    </option>

                                                </select>
                                            </div>
                                            <div className='mt-10'>
                                                <button className='poppins text-[16px] font-[500] rounded-full bg-[#0B067C] w-full text-white py-3' onClick={()=> navigate('/home')}>Submit for Approval</button>
                                            </div>
                                        </>
                                    )
                                }


                            </div>
                        </div>


                        <div className="col-span-1 w-full h-full md:block hidden">
                            <img src={signin} alt="Signin" className="w-full h-screen  object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
