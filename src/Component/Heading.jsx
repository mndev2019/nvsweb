/* eslint-disable react/prop-types */
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Heading = (props) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex place-items-center md:gap-5 gap-2">
                {/* Back Arrow */}
                <IoIosArrowBack className="text-[#004080] text-[20px] cursor-pointer"  onClick={() => navigate(-1)}/>

                {/* Header Text */}
                <div>
                    <h2 className="md:text-[25px] sm:text-[20px] text-[15px] font-[600] inter">{props.title}</h2>
                    <p className="md:text-[15px] text-[12px] font-[400] poppins text-[#8B7C7C] cursor-pointer">
                        {props.text}
                    </p>
                </div>
            </div>

            {/* Conditionally Render Button */}
            {props.btn && (
                <div className="flex justify-end">
                    <button onClick={()=> navigate('/postjob')} className="cursor-pointer md:text-[15px] text-[13px] font-[600] poppins bg-[#004080] text-white rounded-full py-2 md:px-10 px-5">
                        {props.btn}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Heading;
