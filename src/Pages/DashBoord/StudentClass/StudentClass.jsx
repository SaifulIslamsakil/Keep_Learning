import { Link } from "react-router-dom";
import DasTtle from "../../../Shred/DasTitle/DasTtle";
import useAxiosPulic from "../../../Hooks/useAxiosPulic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContex } from "../../../Provider/Provider";

const StudentClass = () => {
    const [AxioxPublice] = useAxiosPulic()
    const {user} = useContext(AuthContex)
    
    const {data:enrrolClass=[]}= useQuery({
        queryKey:["enrrol class",user?.email],
        queryFn: async()=>{
            const res = await AxioxPublice.get(`/Enrrol-Class/${user?.email}`)
            return res.data
        }
    })
    console.log(enrrolClass)
    return (
        <div className=" h-screen p-4">
            <DasTtle
                subhading="Welcome Back Ready For Your Next Lesson"
                hadding="Mohammed Saiful Islam"
            >
            </DasTtle>
            <div>
               {
                enrrolClass.map(enrrol=> <div key={enrrol._id} className="  flex  h-72 mx-auto text-white   p-4">
                <img className=" w-1/2 " src={enrrol.img}
                    alt="" />
                <div className=" p-5 space-y-3 bg-gray-800">
                    <h2 className=" text-2xl font-semibold">{enrrol.title}</h2>
                    <h4 className=" text-2xl font-semibold">{enrrol.name}</h4>
                    <div className=" flex items-center gap-10">
                        <progress className="progress progress-success w-3/4 bg-white" value="50" max="100"></progress>
                        <p className=" text-2xl font-bold">50%</p>
                    </div>
                    <Link to={`/Dashboord/Student-Class-dtls/${enrrol._id}`}>
                    <button className=" btn bg-green-700 px-10  text-white hover:bg-green-600 text-xl border-none font-semibold">Continue Class</button>
                    </Link>
                </div>
            </div>)
               }
            </div>
        </div>
    );
};

export default StudentClass;