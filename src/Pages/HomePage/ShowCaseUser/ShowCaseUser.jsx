
import { useEffect } from "react";
import img from "../../../assets/HomePage/img1.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useQuery } from "@tanstack/react-query";
import useAxiosPulic from "../../../Hooks/useAxiosPulic";
// ..

const ShowCaseUser = (props) => {
    const [AxiosPublic] = useAxiosPulic()
        const {data} = useQuery({
            queryKey:["allData"],
            queryFn:async()=>{
                const res = await AxiosPublic.get("/All-Data")
                return res.data
            }
        })
         console.log(data)
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className=" h-auto lg:h-screen bg-gray-800 text-white space-y-5">
            <div className="lg:flex justify-between items-center gap-5 p-5  ">
                <div className=" flex-1 space-y-7 px-10" data-aos ="fade-left">
                    <h2 className=" text-xl text-green-500 font-semibold">ABOUT EPATHSHALA</h2>
                    <h3 className=" text-3xl font-bold border-l-4 border-green-500 px-5">LEARN SOMETHING NEW, AND GROW <span className=" text-green-500">YOUR SKILLS</span></h3>
                    <p  className=" text-lg">Become the dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
                    <p className=" text-lg">Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
                    <button className=" flex items-center bg-green-500 text-white py-3 px-5 rounded-lg hover:bg-green-700">Read More   <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        {...props}
                    >
                        <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                    </svg></button>

                </div>
                <div className=" flex-1 " data-aos ="fade-right">
                    <img className=" rounded-full w-2/3 h-2/3 mx-auto border-8 border-green-500 " src={img} alt="" />
                </div>
            </div>
            <div className="md:flex space-y-5  mt-5 uppercase items-center  justify-evenly text-center">
                <div >
                    <h2 className=" text-5xl mb-3 text-green-500 font-bold">{data?.allTecher.length}+</h2>
                    <p className=" text-xl font-semibold">TOTAL Teacher</p>
                </div>
                <div >
                    <h2 className=" text-5xl mb-3 text-green-500 font-bold">{data?.allUser.length}+</h2>
                    <p className=" text-xl font-semibold">Total student</p>
                </div>
                <div>
                    <h2 className=" text-5xl mb-3 text-green-500 font-bold">{data?.allStudent.length}+</h2>
                    <p className=" text-xl font-semibold">total users</p>
                </div>
                <div >
                    <h2 className=" text-5xl mb-3 text-green-500 font-bold">{data?.AllClass.length}+</h2>
                    <p className=" text-xl font-semibold">COURSES & VIDEOS</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCaseUser;