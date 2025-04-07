import Titlecomp from '../../Component/Titlecomp';
import news1 from '../../assets/Image/news1.png';
import news2 from '../../assets/Image/news2.png';
import news3 from '../../assets/Image/news3.png';


const News = () => {
    const news = [
        {
            image: news1,
            title: "Latest Innovations Pave the Way to a Sustainable Future",
        },
        {
            image: news2,
            title: "Understanding the role of big data in driving technological",
        },
        {
            image: news3,
            title: "Exploring the latest developments in AI, Robotics",
        },

    ];

    return (
        <>
            <section className="w-full pb-4">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 ">
                            <div className="w-full flex justify-between  md:py-3 py-1">
                                <Titlecomp title="Technology News" />
                                <div className="flex gap-3 items-center mt-2">
                                    <p className="inter font-[600] md:text-[18px] text-[15px] text-[#0B067C]">
                                        See All
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:gap-10 gap-5 mt-3">
                        {news.map((item, index) => (
                            <div key={index} className="col-span-1">
                                <div className="w-full bg-white rounded-[14px] p-4">
                                    <img src={item.image} alt="news" className="w-full xl:h-[300px] h-auto rounded-[8px] object-cover" />
                                    <h2 className="inter font-[600] xl:text-[20px] text-[15px] mt-3">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-2 mt-2">
                                        <p className="text-[12px] inter font-[400] text-[#535974]">
                                            Business
                                        </p>
                                        <span className="w-6 h-[1px] bg-[#20212480]"></span>
                                        <p className="text-[12px] inter font-[400] text-[#535974]">
                                            March 03, 2025
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;
