import Aos from "aos";
import { useEffect } from "react";


const ExtraTow = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className=" space-y-10">
            <div className=" space-y-3">
                <p className="text-center font-semibold text-xl "> ---   Meet Our Instructors --- </p>
                <h3 className=" text-center text-3xl font-bold ">LEARN FROM EXPERT <span className=" text-green-500">INSTRUCTORS</span> </h3>
            </div>

            <div className="bg-green-100 p-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-Aos="fade-top">
                <div className=" bg-white p-3 space-y-3 text-center">
                    <img className="" src="https://i.ibb.co/Jd2ytBy/teacher-using-digital-tablet-AEJBEM9.webp" alt="" />
                    <div>
                        <p className=" text-2xl font-semibold">William Smith</p>
                        <p className=" text-green-500">CEO/ Founder</p>
                    </div>
                </div>
                <div className=" bg-white p-3 space-y-3 text-center"data-Aos="fade-down">
                    <img className="" src="https://i.ibb.co/GTdLG9m/male-teacher-wearing-mask-2021-05-07-00-47-12-utc.webp" alt="" />
                    <div>
                        <p className=" text-2xl font-semibold">William Smith</p>
                        <p className=" text-green-500">CEO/ Founder</p>
                    </div>
                </div>
                <div className=" bg-white p-3 space-y-3 text-center" data-Aos="fade-top">
                    <img className="" src="https://i.ibb.co/dMMrCJm/young-teacher-near-chalkboard-in-school-classroom-2021-04-02-19-33-07-utc.webp" alt="" />
                    <div>
                        <p className=" text-2xl font-semibold">William Smith</p>
                        <p className=" text-green-500">CEO/ Founder</p>
                    </div>
                </div>
                <div className=" bg-white p-3 space-y-3 text-center"data-Aos="fade-down">
                    <img className="" src="https://i.ibb.co/8MhGbKd/back-to-school-reading-book-education-library-c-2021-04-07-00-22-19-utc.webp" alt="" />
                    <div>
                        <p className=" text-2xl font-semibold">William Smith</p>
                        <p className=" text-green-500">CEO/ Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraTow;