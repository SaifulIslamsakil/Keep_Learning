import Aos from "aos";
import { useEffect } from "react";


const Extera = (props) => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className=" h-auto lg:h-screen p-5 md:flex justify-between items-center">
            <div data-Aos="fade-up" className=" flex-1">
                <img className="h-3/4 mx-auto" src="https://i.ibb.co/2k355zX/img-2.png" alt="" />

            </div>
            <div data-Aos="fade-down" className=" text-center flex-1 space-y-6">
                <p className=" text-green-500 font-semibold ">WHO WE ARE</p>
                <h3 className=" text-4xl font-bold">Primary Instruction, Higher Department Of Education</h3>
                <p className=" text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className=" flex items-center justify-center gap-4">
                    <div className=" bg-green-200 p-5 rounded-full flex items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="3em"
                        width="3em"
                        color="green"
                        {...props}
                    >
                        <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                    </svg>
                    </div>

                    <div>
                        <h3 className=" text-2xl font-semibold">Online Courses</h3>
                        <p>Proin sodales feugiat odio curabitur lobortis pretium fringilla eu leo vulputate massa</p>
                    </div>
                </div>
                <div className=" flex items-center justify-center gap-4">
                    <div className=" bg-green-200 p-5 rounded-full flex items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="3em"
                        width="3em"
                        color="green"
                        {...props}
                    >
                        <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                    </svg>
                    </div>

                    <div>
                        <h3 className=" text-2xl font-semibold">Online Courses</h3>
                        <p>Proin sodales feugiat odio curabitur lobortis pretium fringilla eu leo vulputate massa</p>
                    </div>
                </div>
                <div className=" flex items-center justify-center gap-4">
                    <div className=" bg-green-200 p-5 rounded-full flex items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="3em"
                        width="3em"
                        color="green"
                        {...props}
                    >
                        <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                    </svg>
                    </div>

                    <div>
                        <h3 className=" text-2xl font-semibold">Online Courses</h3>
                        <p>Proin sodales feugiat odio curabitur lobortis pretium fringilla eu leo vulputate massa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extera;