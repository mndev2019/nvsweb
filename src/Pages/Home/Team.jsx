// import React from 'react'
import team1 from '../../assets/Image/profile.avif'
import team2 from '../../assets/Image/team2.png'
import team3 from '../../assets/Image/team3.png'
import team4 from '../../assets/Image/team4.png'
import team5 from '../../assets/Image/team5.png'

const Team = () => {
    const profile = [
        {
            image: team1,
            user_name: "@riasharma",
            name: "Ria Sharma "

        },
        {
            image: team2,
            user_name: "@shreya",
            name: "Shreya"
        },
        {
            image: team3,
            user_name: "@somya",
            name: "Somya"
        },
        {
            image: team4,
            user_name: "@rahulkkk",
            name: "Somya"
        },
        {
            image: team5,
            user_name: "@rahulkkk",
            name: "Rahul Kumar"
        },

    ]
    return (
        <>
            <section className="w-full pb-4">
                <div className="container mx-auto pr-5">
                    <div className="grid grid-cols-1 bg-white rounded-[14px] p-4 ">
                        <div className="col-span-1 pb-3">
                            <div className="flex justify-between border-b border-[#DEDEDE] pb-2">
                                <h2 className='poppins font-[600] text-[18px] '>Members</h2>
                                <p className='poppins font-[500] text-[16px] text-[#0B067C]'>
                                    See All
                                </p>
                            </div>
                            {
                                profile.map((itm) => (
                                    <>
                                        <div className="flex justify-between items-center py-3 ">
                                            <div className="flex items-center gap-1">
                                                <img
                                                    src={itm.image}
                                                    alt="Ria Sharma"
                                                    className="h-10 w-10 rounded-full object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-[500] poppins text-[13px] text-black">Ria Sharma</h3>

                                                    </div>
                                                    <p className="text-[12px] font-[500] poppins text-[#535974]">{itm.user_name}</p>
                                                </div>

                                            </div>
                                            <span className="text-[#003366]  text-[10px] xl:text-[14px] font-[400] poppins">Joined 3 months ago</span>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
