/* eslint-disable react/prop-types */
// import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Image/logo.png'
import profilePic from '../assets/Image/profile.png'
import { FiLogOut } from 'react-icons/fi'
import jobs from '../assets/Svg/jobs.svg'
import forum from '../assets/Svg/forum.svg'
import inbox from '../assets/Svg/inbox.svg'
import friends from '../assets/Svg/friends.svg'
import profile from '../assets/Svg/profile.svg'
import manage from '../assets/Svg/manage.svg'
import share from '../assets/Svg/share.svg'
import about from '../assets/Svg/aboutus.svg'
import privacy from '../assets/Svg/privacy.svg'
import terms from '../assets/Svg/terms.svg'
import home from '../assets/Svg/home.svg'


const Sidebar = ({ setIsPopupOpen }) => {
    const menuItems = [
        { name: 'Home', path: '/home', icon: home },
        { name: 'Jobs', path: '/job', icon: jobs, onClick: () => setIsPopupOpen(true)},
        { name: 'Forum', path: '/forum', icon: forum },
        { name: 'Inbox', path: '/inbox', icon: inbox },
        { name: 'Friends', path: '/friends', icon: friends },
        { name: 'Profile', path: '/profile', icon: profile },
        { name: 'Manage Jobs', path: '/managejob', icon: manage },
        { name: 'Share Jobs', path: '/share', icon: share },
        { name: 'About Us', path: '/about', icon: about },
        { name: 'Privacy Policy', path: '/privacy', icon: privacy },
        { name: 'Terms & Conditions', path: '/terms', icon: terms },
    ];
    const location = useLocation();
    return (
        <div>
            <div className="w-full xl:px-5 px-2 lg:py-4 py-1 sidebar h-screen">
                <Link>
                    <img src={logo} alt='logo' className='xl:h-[80px] h-[80px] xl:w-[80px] w-[80px] mx-auto' />
                </Link>
                <div className="my-3 px-2 py-1 bg-white rounded-[6px]  flex items-center xl:gap-3 gap-1  border border-gray-100"  >
                    <img src={profilePic} alt="Profile" className="h-12 w-12 rounded-full" />
                    <div className="flex-1">
                        <h3 className="text-[#001F3F] text-[14px] font-[400] poppins">Meera Saini</h3>
                        <p className="text-[12px] font-[400]  text-gray-500">Workspace</p>
                    </div>
                    {/* <div className="flex flex-col items-center text-primary">
                        <IoMdArrowDropup className="text-sm" />
                        <IoMdArrowDropdown className="text-sm" />
                    </div> */}
                </div>
                <ul className="*:text-sm *:font-light *:text-primary">
                    {menuItems.map(({ name, path, icon }) => (
                        <li key={path}>
                            <Link to={path} className="w-full text-start block rounded-[6px]">
                                <div
                                    className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 
                                    ${location.pathname === path ? 'bg-[#004080]' : 'bg-white'}`}
                                >
                                    <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                        <img
                                            src={icon}
                                            alt={`${name} icon`}
                                            className={`h-[20px] transition-all duration-300 
                                            ${location.pathname === path ? 'filter brightness-0 invert' : ''}`}
                                        />
                                    </div>
                                    <div className="font-bold text-[15px] text-white">
                                        <p
                                            className={`font-[500] xl:text-[14px] text-[12px] poppins 
                                            ${location.pathname === path ? 'text-white' : 'text-[#535974]'}`}
                                        >
                                            {name}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                  
                    <li>
                        <Link to={'/'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <FiLogOut className='text-[#FD3838] text-[19px]' />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className="font-[500] xl:text-[14px] text-[12px]  poppins text-[#FD3838]">  Log out</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
