/* eslint-disable react/prop-types */
import { Dialog } from '@headlessui/react'
import postjob from '../../assets/Image/postjob.png'
import getjob from '../../assets/Image/getjob.png'
import { useNavigate } from 'react-router-dom'

const Jobmodal = ({ isOpen }) => {
    const navigate = useNavigate();
    

  

    return (
        <Dialog open={isOpen} onClose={() => {}} className="relative z-50">
            <div className="fixed inset-0 bg-[#000000c4] bg-opacity-70 flex flex-col items-center justify-center">

                {/* Post a Job Panel */}
                <div
                    className="bg-white p-3 rounded-2xl shadow-lg w-[350px] md:w-[400px] text-center cursor-pointer"
                    onClick={() => navigate('/postjob')}
                 
                >
                    <img
                        src={postjob}
                        alt="Post a Job"
                        className="mx-auto mb-3 h-[100px] w-full object-contain"
                    />
                    <h2 className="text-[25px] font-[600] poppins"    >Post a Job</h2>
                </div>

                {/* Get a Job Panel */}
                <div
                    className="bg-white p-3 rounded-2xl shadow-lg w-[350px] md:w-[400px] text-center mt-5 cursor-pointer"
                    onClick={() => navigate('/getjob')}
                >
                    <img
                        src={getjob}
                        alt="Get a Job"
                        className="mx-auto mb-3 h-[100px] w-full object-contain"
                    />
                    <h2 className="text-[25px] font-[600] poppins">Get a Job</h2>
                </div>
            </div>
        </Dialog>
    );
};

export default Jobmodal;
