// import { dropInstance } from "localforage";

import Aos from "aos";
import { useEffect } from "react";

const Banner = (props) => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <div className="lg:h-[80vh] h-auto " style={{ backgroundImage: "url(https://i.ibb.co/xGznVbQ/education-PHW33-SU.webp)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className=" bg-black p-5 bg-opacity-60 h-full w-full flex justify-center items-center">
                    <div className=" space-y-4 ">
                        <p className=" text-xl font-semibold text-green-500" data-Aos ="fade-right">LEARN ANYTHING, ANYTIME, ANYWHERE</p>
                        <h3 data-Aos ="fade-left" className=" text-5xl font-bold text-white">START YOUR FAVOURITE COURSE <br /> BRIGHT FUTURE</h3>
                        <p data-Aos ="fade-up" className=" text-xl font-semibold text-white">Unlock your potential with our 30-day free trial - <br /> sign up with your email today!</p>
                        <div data-Aos ="fade-up">
                            <button className=" flex items-center bg-green-500 text-white py-3 px-5 rounded-lg border-8 border-green-300 hover:bg-green-700">Read More   <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                {...props}
                            >
                                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                            </svg></button>

                        </div>
                    </div>
                </div>
            </div>

            <div data-Aos ="fade-left" className="hidden lg:flex relative bg-white shadow-lg h-40 p-6 w-[96%] -top-16 mx-auto gap-4">
                <div  className=" flex items-center gap-5">
                    <div className=" flex justify-center items-center w-20 p-5 bg-green-300 rounded-full">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            color="green"
                            {...props}
                        >
                            <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className=" text-xl font-bold">Online Course</h3>
                        <p>Nisi etiam nec tellus praesent pharetra dis.</p>
                    </div>
                </div>
                <div  className=" flex items-center gap-5">
                    <div className=" flex justify-center items-center w-20 p-5  bg-green-300 rounded-full">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            color="green"
                            {...props}
                        >
                            <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className=" text-xl font-bold">Online Course</h3>
                        <p>Nisi etiam nec tellus praesent pharetra dis.</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <div className=" flex justify-center items-center w-20 p-5  bg-green-300 rounded-full">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            color="green"
                            {...props}
                        >
                            <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className=" text-xl font-bold">Online Course</h3>
                        <p>Nisi etiam nec tellus praesent pharetra dis.</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <div className=" flex justify-center items-center w-20 p-5  bg-green-300 rounded-full">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            color="green"
                            {...props}
                        >
                            <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className=" text-xl font-bold">Online Course</h3>
                        <p>Nisi etiam nec tellus praesent pharetra dis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;