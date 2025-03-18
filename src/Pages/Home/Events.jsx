// import React from 'react'

import events1 from '../../assets/Image/events1.png'
import events2 from '../../assets/Image/events2.png'
import events3 from '../../assets/Image/events3.png'


const Events = () => {
    const events = [
        {
            image: events1,
            title: "Future of computing and what it means for society",
        },
        {
            image: events2,
            title: "Future of computing and what it means for society",
        },
        {
            image: events3,
            title: "Future of computing and what it means for society ",
        },

    ]
    return (
        <>
            <section className="w-full pb-4">
                <div className="container mx-auto pr-5">
                    <div className="grid grid-cols-1 bg-white rounded-[14px] p-4 ">
                        <div className="col-span-1 pb-3">
                            <div className="flex justify-between border-b border-[#DEDEDE] pb-2">
                                <h2 className='poppins font-[600] text-[18px] '>Events</h2>
                                <p className='poppins font-[500] text-[16px] text-[#0B067C]'>
                                    See All
                                </p>
                            </div>
                        </div>
                        {
                            events.map((itm) => (
                                <>
                                    <div className="col-span-1 py-3">
                                        <div className="w-full flex gap-2 items-center">
                                            <div className="image xl:h-[92px] h-[78px] w-[150px]">
                                                <img src={itm.image} alt='events' className='h-full rounded-[12px] object-cover w-full' />
                                            </div>
                                            <div className="text">
                                                <h2 className="inter font-[500] xl:text-[15px] text-[12px] mt-3">
                                                  {itm.title}
                                                </h2>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <p className=" xl:text-[12px] text-[10px] inter font-[400] text-[#535974]">
                                                        Business
                                                    </p>
                                                    <span className="w-2 h-[1px] bg-[#20212480]"></span>
                                                    <p className="xl:text-[12px] text-[10px] inter font-[400] text-[#535974]">
                                                        March 03, 2025
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events
