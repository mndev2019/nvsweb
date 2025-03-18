// import React from 'react'

import Titlecomp from "../../Component/Titlecomp"
import team1 from '../../assets/Image/team7.png'
import team2 from '../../assets/Image/team2.png'
import team3 from '../../assets/Image/team3.png'
import team4 from '../../assets/Image/team4.png'
import team5 from '../../assets/Image/team5.png'

const Mobileteammembers = () => {
    const team = [
        {
            image: team1
        },
        {
            image: team2
        },
        {
            image: team3
        },
        {
            image: team4
        },
        {
            image: team5
        },
    ]
    return (
        <>
            <section className="w-full pb-4 lg:hidden block">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:py-3 py-1">
                        <div className="col-span-1">
                            <div className="w-full flex justify-between">
                                <Titlecomp title="Members" />
                                <div className="flex gap-3 items-center mt-2">
                                    <p className="inter font-[600] md:text-[18px] text-[15px] text-[#0B067C]">
                                        See All
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 mt-3">
                        {
                            team.map((itm) => (
                                <>
                                    <div className="col-span-1">
                                        <div className="w-full">
                                            <img src={itm.image} alt="image" className="h-[50px] w-[50px] rounded-full" />
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

export default Mobileteammembers
