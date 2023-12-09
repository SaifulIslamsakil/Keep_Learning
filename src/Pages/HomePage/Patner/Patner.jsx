
import { useEffect } from "react"
import img1 from "../../../assets/patner/amara-1536x404.png"
import img2 from "../../../assets/patner/asgardia-1536x360.png"
import img3 from "../../../assets/patner/code-lab-1536x404.png"
import img4 from "../../../assets/patner/earth-2.0-1536x366.png"
import img5 from "../../../assets/patner/fox-hub-1536x359.png"
import img6 from "../../../assets/patner/goldline-1536x357.png"
import img7 from "../../../assets/patner/lighting-1536x495.png"
import img8 from "../../../assets/patner/muzica-1536x384.png"
import img9 from "../../../assets/patner/velocity-9-1536x395.png"
import Aos from "aos"
const Patner = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className=" bg-green-500 space-y-3 h-auto lg:h-[70vh] w-full md:flex justify-between items-center gap-5 p-5">
            <div className=" grid grid-cols-2 lg:grid-cols-3 flex-1 gap-5 px-5 " data-Aos="fade-right">
                <div className=" bg-white rounded-lg p-5">
                    <img src={img1} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img2} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img3} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img4} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img5} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img6} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img7} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img8} alt="" />
                </div>
                <div  className=" bg-white rounded-lg p-5">
                    <img src={img9} alt="" />
                </div> 
            </div>
            <div className=" flex-1 space-y-6 text-white ml-10" data-Aos="fade-left">
                    <p className=" text-4xl font-bold">Featured Partner</p>
                    <p className=" text-xl ">Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus dolor a urna finibus ultricies libero.</p>
                    <button className="bg-gray-950 text-white text-center py-3 px-6 rounded-lg hover:bg-slate-800">Browser All patner</button>
            </div>
        </div>
    );
};

export default Patner;