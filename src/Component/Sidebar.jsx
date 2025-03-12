// import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Image/logo.png'
import profilePic from '../assets/Image/profile.png'
import { FiHome, FiLogOut } from 'react-icons/fi'
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
// import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const Sidebar = () => {
    const location = useLocation();
    return (
        <div>
            <div className="w-full xl:px-5 px-2 lg:py-4 py-1 sidebar">
                <Link>
                    <img src={logo} alt='logo' className='xl:h-[100px] h-[80px] xl:w-[100px] w-[80px] mx-auto' />
                </Link>
                <div className="mt-5 p-2 bg-white rounded-[6px]  flex items-center xl:gap-3 gap-1  border border-gray-100"  >
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
                <ul className="*:py-1  *:text-sm *:font-light *:text-primary">
                    <li>
                        <Link to={'/home'} className='w-full  text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/home' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <FiHome className={`text-2xl ${location.pathname === '/home' ? 'text-white' : 'text-gray-400'}`} />

                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/home' ? 'text-white' : 'text-gray-400'}`}>  Home</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/job'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/job' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={jobs} alt='jobicon' className={`h-[20px] ${location.pathname === '/job' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/job' ? 'text-white' : 'text-[#535974]'}`}>  Jobs</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/forum'} className='w-full  text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/forum' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={forum} alt='jobicon' className={`h-[20px] ${location.pathname === '/forum' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/forum' ? 'text-white' : 'text-[#535974]'}`}>  Forum</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/inbox'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/inbox' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={inbox} alt='jobicon' className={`h-[20px] ${location.pathname === '/inbox' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/inbox' ? 'text-white' : 'text-[#535974]'}`}>  Inbox</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/friends'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/friends' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={friends} alt='jobicon' className={`h-[20px] ${location.pathname === '/friends' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/friends' ? 'text-white' : 'text-[#535974]'}`}>  Friends</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/profile'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/profile' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={profile} alt='jobicon' className={`h-[20px] ${location.pathname === '/profile' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/profile' ? 'text-white' : 'text-[#535974]'}`}>  Profile</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/manage'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/manage' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={manage} alt='jobicon' className={`h-[20px] ${location.pathname === '/manage' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/manage' ? 'text-white' : 'text-[#535974]'}`}>  Manage Jobs</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/share'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/share' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={share} alt='jobicon' className={`h-[20px] ${location.pathname === '/share' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/share' ? 'text-white' : 'text-[#535974]'}`}>  Share Jobs</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/about' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={about} alt='jobicon' className={`h-[20px] ${location.pathname === '/about' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/about' ? 'text-white' : 'text-[#535974]'}`}>  About Us</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/privacy'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/privacy' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={privacy} alt='jobicon' className={`h-[20px] ${location.pathname === '/privacy' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/privacy' ? 'text-white' : 'text-[#535974]'}`}>  Privacy Policy</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Terms'} className='w-full  text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/job' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <img src={terms} alt='jobicon' className={`h-[20px] ${location.pathname === '/Terms' ? 'text-white' : 'text-[#535974]'}`} />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className={`font-[500] xl:text-[14px] text-[12px]  poppins ${location.pathname === '/terms' ? 'text-white' : 'text-[#535974]'}`}>  Terms & Conditions</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className='w-full   text-start block rounded-[6px] '>
                            <div className={`w-full flex gap-2 items-center rounded-[6px] px-2 py-1 ${location.pathname === '/job' ? 'bg-[#004080] ' : "bg-white"}`}>
                                <div className="h-[40px] w-[40px] flex justify-center items-center rounded-md">
                                    <FiLogOut className='text-[#FD3838] text-[19px]' />
                                </div>
                                <div className="font-bold text-[15px] text-white ">
                                    <p className="font-[500] xl:text-[14px] text-[12px]  poppins text-[#FD3838] ">  Log out</p>
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
