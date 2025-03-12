import signin from '../assets/Image/signin.png';
import logo from '../assets/Image/logo.png'
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
    const navigate = useNavigate();
    return (
        <section className="signin ">
            <div className="container max-w-full h-full">
                <div className="grid md:grid-cols-2 grid-cols-1  h-full items-center">
                    <div className="col-span-1 flex flex-col items-center  text-center md:px-0 px-5">
                        <div className="">
                            <img src={logo} alt='image' className='md:h-[120px] h-[80px] mx-auto' />
                            <h2 className='md:text-[30px] text-[20px] inter font-[700] md:mt-8 mt-5'>
                                Sign in to your account
                            </h2>
                            <p className='inter md:text-[18px] text-[14px] font-[400] text-[#8B7C7C] md:py-5 py-3'>
                                please confirm your country code and enter
                                <span className='block'>
                                    your phone number
                                </span>
                            </p>
                            <div className="mt-[10px] text-left">
                                <label htmlFor="mobile" className="dmsans  text-[16px] font-[500] text-[#212121]">
                                    Mobile Number
                                </label>
                                <input type='text'
                                    placeholder='XXXXXXXXXXXX'
                                    className='w-full py-3 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E]' />
                            </div>
                            <div className='mt-10'>
                                <button className='poppins text-[16px] font-[500] rounded-full bg-[#0B067C] w-full text-white py-3' onClick={() => navigate('/otp')}>Sign In</button>
                            </div>
                            <div className='mt-4'>
                                <p className="text-[14px] font-[400] text-[#212121] poppins">
                                    <Link to={'/account'}>
                                        Don&apos;t have an account?{" "}
                                    </Link>
                                    <Link to={'/account'} className="text-[#0B067C] font-semibold ">
                                        Sign up
                                    </Link>
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
    );
}

export default Signin;
