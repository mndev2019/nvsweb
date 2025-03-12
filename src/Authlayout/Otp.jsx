
import signin from '../assets/Image/signin.png';
import logo from '../assets/Image/logo.png'
import OTPInput from 'react-otp-input';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Otp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    return (
        <>
            <section className="signin ">
                <div className="container max-w-full h-full">
                    <div className="grid md:grid-cols-2 grid-cols-1   h-full items-center">
                        <div className="col-span-1 flex flex-col items-center  text-center">
                            <div className="">
                                <img src={logo} alt='image' className='md:h-[120px] h-[80px] mx-auto' />
                                <h2 className='md:text-[30px] text-[20px] inter font-[700] md:mt-8 mt-5'>
                                    OTP Verification
                                </h2>
                                <p className='inter text-[18px] font-[400] text-[#8B7C7C] md:py-5 py-3'>
                                    Enter OTP Code sent to your number
                                    <span className='block'>
                                        +9109999555
                                    </span>
                                </p>

                                <div className="OtpBox">
                                    <OTPInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={5}

                                        renderInput={(props) => (
                                            <input
                                                {...props}
                                                className="w-[30px] h-12 border border-[#E0E5EB] shadow-md rounded-lg text-center text-[#A67D7D] text-lg outline-none"
                                            />
                                        )}
                                    />
                                </div>


                                <div className='mt-10'>
                                    <button className='poppins text-[16px] font-[500] rounded-full bg-[#0B067C] w-full text-white py-3' onClick={() => navigate('/register')}>Continue</button>
                                </div>
                                <div className='mt-4'>
                                    <p className="text-[14px] font-[400] text-[#212121] poppins">
                                        <Link to={'/account'}>
                                            Don&apos;t have an account?{" "}
                                        </Link>
                                        <a href="/signup" className="text-[#0B067C] font-semibold ">
                                            Sign up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-1 w-full h-full md:block hidden">
                            <img src={signin} alt="Signin" className="w-full h-screen  object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Otp
