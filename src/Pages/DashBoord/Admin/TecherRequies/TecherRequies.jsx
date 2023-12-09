import { useQuery } from "@tanstack/react-query";
import DasTtle from "../../../../Shred/DasTitle/DasTtle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";



const TecherRequies = () => {
    const axiosSecure = useAxiosSecure()
    const [reject, setReject] =useState("Requidest")
    const { data: Requiest = [], refetch } = useQuery({
        queryKey: ["requiest"],
        queryFn: async () => {
            const res = await axiosSecure.get("/send-Requies")
            return res.data
        }
    })
     console.log(Requiest)
    const handelSetRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, i am set role it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/set-Role/${id}`)
                    .then(res => {
                        if (res.data.role) {
                            Swal.fire({
                                title: "Accepted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
        
        
    }
        const handelRequies =()=>{
            setReject("rejected")
        }
    return (
        <div>
            <div>
                <DasTtle
                    hadding="Techer Requiest"
                    subhading="find an techer "
                >
                </DasTtle>
                <div className=" p-5 rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className=" uppercase bg-green-500 text-white font-semibold text-xl">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>title</th>
                                    <th>experience</th>
                                    <th>category</th>
                                    <th>status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    Requiest.map((card, ida) => <tr key={card._id}>
                                        <th>
                                            <label>
                                                <p className="text-2xl font-semibold">{ida + 1}</p>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={card.img} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{card.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <th>
                                            {card.title}

                                        </th>
                                        <th>{card.exp}</th>
                                        <th>
                                            {card.categoty}
                                        </th>
                                        {card?.role ? <th className=" uppercase text-green-500">
                                           
                                            accepted
                                        </th> :
                                            <th  className=" uppercase text-red-500">
                                                {reject}
                                            </th>
                                        }
                                        <th className="space-y-2">
                                            <button disabled={reject =="rejected" || card?.role} onClick={() => handelSetRole(card._id)} className="btn hover:bg-gray-800    bg-green-500 text-white w-28 py-2 rounded-lg ">Approved</button>

                                            <button  disabled={reject =="rejected" || card?.role} onClick={handelRequies} className=" hover:bg-green-500 btn bg-gray-800 text-white  py-2 w-28 rounded-lg ">Reject</button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TecherRequies;