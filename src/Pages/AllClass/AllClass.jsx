import PageBanner from "../../Shred/PageBanner/PageBanner";
import useAxiosPublic from "../../Hooks/useAxiosPulic"
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllClass = () => {
    const [axiosPublic] = useAxiosPublic()
    const { data: allClass = [] } = useQuery({
        queryKey: ['all-class'],
        queryFn: async () => {
            const res = await axiosPublic.get("/all-Class")
            return res.data
        }
    })
    console.log(allClass)
    return (
        <div className=" space-y-10">
            <PageBanner
                ImagePath={"https://i.ibb.co/gRRSPKW/education-2021-04-04-14-25-07-utc.jpg"}
                Hadding={"Chose your favorite crouse "}
            ></PageBanner>
            <div>
                <div className=" space-y-3">
                    <p className="text-center font-semibold text-xl "> ---   Get The Our Most Popular Crouse--- </p>
                    <h3 className=" text-center text-3xl font-bold uppercase ">LEARN FROM most <span className=" text-green-500">popular crouse in world</span> </h3>
                </div>

            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-3 shadow-lg">
                {
                    allClass.map(Class => <div key={Class._id} className="card p-4 space-y-3  bg-base-100 shadow-xl">
                        <figure>
                            <img className="h-32 w-full" src={Class.img} alt="Shoes" /></figure>
                        <div className="space-y-3">
                            <p className=" text-green-500 t">{Class.title}</p>
                            <h3 className="">{Class.dec}</h3>
                            <div className="divider divider-success"></div>
                            <div className="uppercase">
                                <p>Name : {Class.name}</p>
                                <p> Total enrolmen : 3</p>
                                <p>price : ${Class.price}</p>
                            </div>
                            <Link to={`/cruseDetiles/${Class._id}`}>
                                <button className=" w-full hover:bg-green-800 text-center rounded-lg font-bold text-white bg-green-500 py-3 px-5 ">Enroll Now</button>
                            </Link>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllClass;