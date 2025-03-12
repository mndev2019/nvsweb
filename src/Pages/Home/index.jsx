// import React from 'react'

import { useState } from "react"
import Sidebar from "../../Component/Sidebar"
import Topheader from "../../Component/Topheader"

import Banner from "./Banner"
import Events from "./Events"
import Features from './Features'
import Forum from "./Forum"
import News from "./News"
import Team from './Team'
import { IoMdClose } from "react-icons/io"

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>

      <section className="">
        <div className="">

          <div className="grid lg:grid-cols-12 grid-cols-10">
            <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative col-span-2 overflow-y-auto`}>
              <div className="p-2 lg:hidden block flex justify-end items-end">
                <IoMdClose
                  className="text-black text-end text-[24px] cursor-pointer"
                  onClick={toggleSidebar}
                />
              </div>
              <Sidebar />
            </div>
            <div className="col-span-10 bg-[#f8f4fc] ">
              <Topheader toggleSidebar={toggleSidebar} />
              <div className="grid lg:grid-cols-12 grid-cols-1">
                <div className="lg:col-span-8 col-span-1">
                  <Banner />
                  <Forum />

                </div>
                <div className="col-span-4 lg:block hidden">
                  <Features />
                  <Team />
                  <Events />
                </div>
              </div>
              <News />
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default Home
