// import React from 'react'

import { FaCircle } from "react-icons/fa"

const Features = () => {
    const features = [
        { name: 'Members', color: 'text-yellow-400' },
        { name: 'Job Board', color: 'text-red-500' },
        { name: 'My Group', color: 'text-blue-600' },
        { name: 'Gallery', color: 'text-cyan-400' },
    ];
    return (
        <>
            <section className="w-full py-4">
                <div className="container pr-4">
                    <div className="grid grid-cols-1 bg-white rounded-[14px] p-4">
                        <div className="col-span-1 pb-3">
                            <h2 className='poppins font-[600] text-[18px] border-b border-[#DEDEDE] pb-2'>Features</h2>
                        </div>
                        <div className="col-span-1 mt-2">
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <FaCircle className={`${feature.color} text-[8px]`} />
                                        <span className="xl:text-[18px] text-[16px] font-[500] inter">{feature.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </section>

        </>
    )
}

export default Features

