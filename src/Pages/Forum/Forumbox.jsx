
import forum1 from '../../assets/Image/forumbox.png'
import user from '../../assets/Image/team5.png'
import { CiCalendar } from "react-icons/ci"
import { BiLike } from "react-icons/bi"
import { TbMessageDots } from "react-icons/tb"
import { PiShareFat } from "react-icons/pi"
import Heading from '../../Component/Heading'


const Forumbox = () => {
    return (
        <div>
            <section className="w-full pb-4">
                <div className="">
                    <div className="grid grid-cols-1  ">
                        <div className="col-span-1">
                            <Heading title="Forum"  />

                        </div>
                        {
                            [1, 2].map((itm) => {
                                return (
                                    <>
                                        <div className="col-span-1 mt-3 bg-white rounded-[14px] md:p-4 p-3" key={itm}>
                                            <div className="flex items-center gap-4">
                                                <img src={user} alt="User" className="h-[66px] w-[66px] rounded-full" />
                                                <div>
                                                    <h3 className="md:text-[18px] text-[15px] font-[500] poppins">Rahul Kumar</h3>
                                                    <div className="flex gap-2 items-center">
                                                        <CiCalendar className="md:text-[20px] text-[18px] text-[#535974]" />
                                                        <p className="md:text-[14px] text-[12px] text-[#535974] font-[400] inter">Feb 20, 2025 • 01:00 PM </p>

                                                    </div>
                                                    <p className="md:text-[14px] text-[12px] text-[#767F8C] font-[400] inter">
                                                        by Equitymaster</p>
                                                </div>
                                            </div>
                                            <div className="md:mt-4 mt-3">
                                                <h4 className="md:text-[20px] text-[18px] font-[600] inter">Breaking News</h4>
                                                <p className="md:text-[14px] text-[12px] inter font-[400] text-[#535974] mt-2 text-justify">
                                                    Lorem  ipsum dolor sit amet consectetur. Dolor id morbi aliquam praesent nam et consectetur sagittis quam.. Urna cras in libero egestas sit non ac lobortis pellentesque.. Pulvinar semper donec etiam lobortis amet vulputate tellus nisl.. Nibh aliquam faucibus consectetur eget nunc laoreet..
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <img src={forum1} alt="News" className="w-full md:h-[322px] h-auto rounded-lg object-cover" />
                                            </div>
                                            <div className="flex justify-between items-center mt-4 text-gray-500">
                                                <div className="flex items-center md:gap-5 gap-3">
                                                    <div className="flex  gap-1 items-center">
                                                        <BiLike className="md:text-[23px] text-[20px]" /> <span className="inter text-[#535974] font-[500] md:text-[16px] text-[12px]">25 Likes</span>
                                                    </div>
                                                    <div className="flex  gap-1 items-center">
                                                        <TbMessageDots className="md:text-[23px] text-[20px]" /> <span className="inter text-[#535974] font-[500] md:text-[16px] text-[12px]">14 comments</span>
                                                    </div>
                                                    <div className="flex  gap-1 items-center">
                                                        <PiShareFat className="md:text-[23px] text-[20px]" /> <span className="inter text-[#535974] font-[500] md:text-[16px] text-[12px]">14 Shares</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Forumbox
