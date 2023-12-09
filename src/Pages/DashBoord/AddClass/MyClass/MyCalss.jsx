import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import DasTtle from "../../../../Shred/DasTitle/DasTtle";
import { AuthContex } from "../../../../Provider/Provider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCalss = () => {
    const AxiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContex)
    const { data: myclass = [], refetch } = useQuery({
        queryKey: ["myClass", user.email],
        queryFn: async () => {
            const res = await AxiosSecure.get(`/My_Clsss/${user.email}`)
            return res.data
        }
    })
    console.log(myclass)

    const handelClassDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.delete(`/My_Class/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    refetch()
            })
             
            }
          });
    }
    return (
        <div>
            <DasTtle
                subhading='look at '
                hadding="My class"
            ></DasTtle>
            <p className=" text-2xl ml-10 font-semibold">Total Class : {myclass.length}</p>
            <div className=" grid grid-cols-3 w-11/12 mx-auto  gap-5 m-4">
                {myclass.map(card => <div key={card._id} className="card p-3 bg-base-100 shadow-xl">
                    <figure>
                        <img className="h-40" src={card.img} alt="Shoes" /></figure>
                    <div className=" pt-2 ">
                        <p className=" font-semibold  ">{card.title}</p>
                        <p className="">{card.dec}</p>
                        <div className="divider divider-success"></div>
                        <div className=" flex gap-5 items-center ">
                            <ul className="   ">
                                <li>email :</li>
                                <li>name :</li>
                                <li>price :</li>
                                <li>Status :</li>
                            </ul>
                            <ul className="">
                                <li>{card.email}</li>
                                <li>{card.name}</li>
                                <li>$ {card.price}</li>
                                {card.status? <li className=" text-green-500 font-semibold uppercase">{card.status}</li> : <li className=" text-red-500 font-semibold uppercase">panding</li>}
                            </ul>
                        </div>
                        <div className=" flex justify-between pt-4">
                            <button onClick={()=>handelClassDelete(card._id)} className=" hover:bg-green-800 text-center rounded-lg font-semibold text-white bg-green-500 btn ">Delete</button>
                            <Link to={`/Dashboord/ClassUpdate/${card._id}`}>
                                <button className="hover:bg-green-800 text-center rounded-lg font-semibold text-white bg-green-500 btn  ">Update</button>
                            </Link>
                            <Link to={`/Dashboord/Techer-ClassDtls/${card._id}`}>
                                <button className="hover:bg-green-800 text-center rounded-lg font-semibold text-white bg-green-500 btn "> Detils</button>
                            </Link>
                        </div>
                    </div>
                </div>

                )}
            </div>
        </div>
    );
};

export default MyCalss;