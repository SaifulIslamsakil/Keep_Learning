import { useEffect } from "react";
import { useState } from "react";
import HighlightCard from "../../../Components/HighlightCard/HighlightCard";


const HighlightCruse = () => {
    const [data, setdata] = useState()
    useEffect(()=>{
        fetch("crouseData.json")
        .then(res=> res.json())
        .then(data=>setdata(data))
    },[])
    

    return (
       <div className="space-y-6">
        <p className=" w-72 text-center font-bold text-3xl border-l-4 px-3 border-green-600">Featured Courses</p>
         <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-3 shadow-lg">
            {
                data?.map(d => <HighlightCard
                key={d.id}
                data={d}
                ></HighlightCard>)
            }
        </div>
       </div>
    );
};

export default HighlightCruse;