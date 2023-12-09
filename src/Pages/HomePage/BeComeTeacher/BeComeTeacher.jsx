import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BeComeTeacher = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className="  md:flex  space-y-5 justify-evenly bg-slate-100 p-5 items-center">
            <div className=" flex-1"data-Aos="fade-left">
                <img className=" mx-auto w-3/4" src="https://i.ibb.co/fHh05Kn/1.png" alt="" />
            </div>
            <div className=" flex-1 space-y-6" data-Aos="fade-right">
                <h2 className=" text-3xl font-bold">Become an instructor?</h2>
                <p className=" text-2xl ">Easily share your knowledge so that <br /> others can benefit from it.</p>
                <p>Instructors from around the world teach millions of students on our website. We provide tools and skills to teach what you love. You can easily cooperate with us by sending your teaching sample</p>
                <Link to='/On-tech'>
                    <button className=" mt-4 text-white text-center bg-green-500 py-3 px-5 hover:bg-green-800 rounded-lg">Start Teaching Today</button>
                </Link>
            </div>
        </div>
    );
};

export default BeComeTeacher;