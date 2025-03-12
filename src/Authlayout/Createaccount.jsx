import signin from '../assets/Image/signin.png';
import logo from '../assets/Image/logo.png'

const Createaccount = () => {
    return (
        <>
            <section className=" ">
                <div className="container max-w-full h-full">
                    <div className="grid grid-cols-2  h-full items-center">
                        <div className="col-span-1 flex flex-col items-center  text-center">
                            <div className="">
                                <img src={logo} alt='image' className='h-[120px] mx-auto' />
                                <h2 className='text-[30px] inter font-[700] mt-5'>
                                    Create an account
                                </h2>
                                <div className=''>
                                    <p className='inter text-[18px] font-[400] text-[#8B7C7C] '>
                                        please enter your all details

                                    </p>
                                </div>
                                <div className="mt-[10px] text-left">
                                    <label htmlFor="name" className="dmsans  text-[16px] font-[500] text-[#212121]">
                                        Name
                                    </label>
                                    <input type='text'
                                        placeholder='XXXXXXXXXXXX'
                                        className='w-full py-2 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E]' />
                                </div>
                                <div className="mt-[10px] text-left">
                                    <label htmlFor="email" className="dmsans  text-[16px] font-[500] text-[#212121]">
                                        Email
                                    </label>
                                    <input type='text'
                                        placeholder='XXXXXXXXXXXX'
                                        className='w-full py-2 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E]' />
                                </div>
                                <div className="mt-[10px] text-left">
                                    <label htmlFor="mobile" className="dmsans  text-[16px] font-[500] text-[#212121]">
                                        Mobile Number
                                    </label>
                                    <input type='text'
                                        placeholder='XXXXXXXXXXXX'
                                        className='w-full py-2 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E]' />
                                </div>
                                <div className="mt-[10px] text-left">
                                    <label htmlFor="dateofbirth" className="dmsans  text-[16px] font-[500] text-[#212121]">
                                        Date of Birth
                                    </label>
                                    <input type='date'
                                        placeholder='XXXXXXXXXXXX'
                                        className='w-full py-2 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E]' />
                                </div>
                                <div className="mt-[10px] text-left">
                                    <label htmlFor="city" className="dmsans  text-[16px] font-[500] text-[#212121]">
                                        City
                                    </label>
                                    <input type='text'
                                        placeholder='XXXXXXXXXXXX'
                                        className='w-full py-2 px-3 border border-[#0000001A] rounded-[10px] shadow-[0px_4px_62px_0px_#99ABC62E]' />
                                </div>
                                <div className='mt-7'>
                                    <button className='poppins text-[16px] font-[500] rounded-full bg-[#0B067C] w-full text-white py-2'>Sign Up</button>
                                </div>
                                <div className='mt-2'>
                                    <p className="text-[14px] font-[400] text-[#212121] poppins">
                                    Already have an account?{" "}
                                        <a href="/signup" className="text-[#0B067C] font-semibold ">
                                            Sign up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-1 w-full h-full">
                            <img src={signin} alt="Signin" className="w-full h-screen  object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Createaccount
