import Aos from "aos";
import { useEffect } from "react";


const Reviews = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className=" space-y-5 mb-10">
             <div className=" space-y-3">
                <p className="text-center font-semibold text-xl "> ---   Customers reviews --- </p>
                <h3 className=" text-center text-3xl font-bold ">WHAT PEOPLE  <span className=" text-green-500">SAY</span> </h3>
            </div>

            <div data-Aos="fade-right" className=" md:flex h-auto md:h-screen p-5 space-y-4  bg-green-100 gap-3 justify-center items-center">
               <div className=" bg-white w-full flex-1 space-y-8 p-6"> 
               <div className="rating ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto delectus, suscipit similique sint beatae reprehenderit distinctio amet nobis autem optio, at eius consequuntur illo dolore, ducimus vel obcaecati sed.</p>
                    <div className=" flex gap-5">
                        <img className=" w-16 h-16 rounded-full" src="https://i.ibb.co/YWF5y5x/asian-business-woman-working-in-laptop-on-sofa-jap-GM7-YU66-copy.webp" alt="" />
                        <div>
                            <h2 className="text-2xl font-bold ">saiful islam</h2>
                            <p>seo</p>
                        </div>
                    </div>
                </div>  
               <div data-Aos="fade-left" className=" bg-white w-full flex-1 space-y-8 p-6"> 
               <div className="rating ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto delectus, suscipit similique sint beatae reprehenderit distinctio amet nobis autem optio, at eius consequuntur illo dolore, ducimus vel obcaecati sed.</p>
                    <div className=" flex gap-5">
                        <img className=" w-16 h-16 rounded-full" src="https://i.ibb.co/YWF5y5x/asian-business-woman-working-in-laptop-on-sofa-jap-GM7-YU66-copy.webp" alt="" />
                        <div>
                            <h2 className="text-2xl font-bold ">saiful islam</h2>
                            <p>seo</p>
                        </div>
                    </div>
                </div>  

                  

            </div>
        </div>
    );
};

export default Reviews;