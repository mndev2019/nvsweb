// import React from 'react'
import banner from '../../assets/Svg/banner.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from '../../assets/Image/team4.png'
import avatar2 from '../../assets/Image/team2.png'
import avatar3 from '../../assets/Image/team3.png'
import avatar4 from '../../assets/Image/team6.png'


const Banner = () => {

    return (
        <>
            <div className="w-full py-4 ">
                <div className="container mx-auto px-4">
                    <div className='bg-white rounded-[14px] p-4' >
                        <img src={banner} alt='banner' />
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex -space-x-2'>
                            {[avatar1, avatar2, avatar3, avatar4].slice(0, 4).map((itm, index) => (
                                <img
                                    key={index}
                                    src={itm}
                                    alt='avatar'
                                    className='h-10 w-10 rounded-full border-2 border-white'
                                />
                            ))}
                            <div className='h-10 w-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-sm text-[#535974]'>
                                +9
                            </div>
                        </div>
                        <button className='bg-[#003366] text-white md:px-8 px-5 md:py-3 py-2 rounded-full poppins text-[14px] font-[500]'>
                            Invite Others
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner
