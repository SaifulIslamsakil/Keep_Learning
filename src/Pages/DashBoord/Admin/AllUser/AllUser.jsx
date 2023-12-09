import DasTtle from "../../../../Shred/DasTitle/DasTtle";
import useAxiosSecre from "../../../../Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxiosSecre()
    const { data: allUser = [], refetch, isPending } = useQuery({
        queryKey: ["all user"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    if(isPending){
        return <h2>lodding....</h2>
    }
    const handelSetRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, im Set Role it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/admin/make-Admin/${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount>0){
                    Swal.fire({
                        title: "set Role!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                }
            })
             
            }
          });
        
    }
    return (
        <div>
            <div>
                <DasTtle
                    hadding="All Users"
                    subhading="find all user "
                >
                </DasTtle>
                <div>
                    <p className=" p-5 text-2xl font-semibold uppercase text-center text-gray-800">total user : {allUser.length}</p>
                </div>
                <div className=" p-5 rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className=" text-center uppercase bg-green-500 text-white font-semibold text-xl">
                                <tr>
                                    <th>#</th>
                                    <th>Images</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>status</th>
                                    <th>Make admin</th>


                                </tr>
                            </thead>
                            <tbody className=" text-center">
                                {/* row 1 */}
                                {
                                    allUser.map((user, ida) => <tr key={user._id}>
                                        <th>
                                            <label>
                                                <p className="text-2xl font-semibold">{ida + 1}</p>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className=" flex justify-center w-28 mx-auto h-28">
                                                        <img className="mx-auto" src={user.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <th>
                                            {user.name}

                                        </th>
                                        <th>{user.email}</th>
                                        {
                                            user?.Role ? <th>
                                                {user.Role}
                                            </th> :
                                                <th>
                                                    user
                                                </th>
                                        }
                                        <th>
                                            <button onClick={() => handelSetRole(user._id)} className="  hover:bg-gray-800 btn bg-green-500 text-white ">Admin</button>
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

export default AllUser;