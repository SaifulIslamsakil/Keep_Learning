import Aos from "aos";
import { useEffect } from "react";


const HighlightCard = ({ data }) => {
    const { img, category, name, retting } = data
    useEffect(()=>{
        Aos.init()
    },[])
  
    return (
        <div className="card  bg-base-100 shadow-xl" data-Aos="fade-top">
            <figure>
                <img className=" w-full h-40" src={img} alt="Shoes" /></figure>
            <div className=" px-5 py-3 space-y-2">
                <p className=" text-green-500 text-xl">{category}</p>
                <h3 className="font-semibold ">{name}</h3>
                <p className=" text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus corrupti esse autem quisquam sapiente quos similique temporibus expedita neque. Repudiandae!</p>
                <div className=" flex items-center gap-5">
                <span className=" text-2xl ">({retting})</span>
                <div className="rating ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                </div>
                <div className="divider divider-success"></div>
                <button className=" w-full hover:bg-green-800 text-center rounded-lg font-bold text-white bg-green-500 py-3 px-5 ">Enroll Now</button>
            </div>
        </div>
    );
};

export default HighlightCard;