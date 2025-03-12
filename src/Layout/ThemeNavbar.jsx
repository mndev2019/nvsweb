// import React from 'react'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/Image/logo.png'
import notification from '../assets/Image/notification.png'
import { Link } from "react-router-dom";

const ThemeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const NavLinks = () => {
        return (
            <ul className="hidden md:flex gap-10 items-center">
                <li><Link to="/" className="text-[20px] font-[500] text-[#8B7C7C] hover:text-gray-600">Home</Link></li>
                <li><Link to="/jobs" className="text-[20px] font-[500] text-[#8B7C7C] Poppins">Jobs</Link></li>
                <li><Link to="/forum" className="text-[20px] font-[500] text-[#8B7C7C] Poppins">Forum</Link></li>
                <li><Link to="/inbox" className="text-[20px] font-[500] text-[#8B7C7C] Poppins">Inbox</Link></li>
                <li><Link to="/friends" className="text-[20px] font-[500] text-[#8B7C7C] Poppins">Friends</Link></li>
                <li><Link to="/login" className="text-[20px] font-[500] text-[#8B7C7C] Poppins">Log In</Link></li>
                <li>
                    <Link>
                        <img src={notification} className="" />
                    </Link>
                </li>
                <li>
                    <Link>
                        <button className="text-[20px] font-[500] text-white Poppins bg-[#0B067C] rounded-full px-7 py-1">
                            Sign Up
                        </button>
                    </Link>
                </li>
            </ul>
        );
    };

    return (
        <>
            <nav className="bg-white text-white py-2  shadow-[0px_16px_80px_0px_#0000000F]">
                <div className="container mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <img src={logo} className="h-[70px]" />

                    {/* Desktop Menu */}
                    <NavLinks />
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center bg-[#0B067C] py-2">
                        <NavLinks />
                    </div>
                )}
            </nav>
        </>
    )
}

export default ThemeNavbar
