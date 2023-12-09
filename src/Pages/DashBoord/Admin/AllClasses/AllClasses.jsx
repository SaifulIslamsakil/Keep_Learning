import DasTtle from "../../../../Shred/DasTitle/DasTtle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllClasses = () => {
    const axiosSecure = useAxiosSecure()
    const { data: AllClasses = [] } = useQuery({
        queryKey: ["allClass"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin/AllClasses")
            return res.data
        }
    })
    console.log(AllClasses)
    const hanelApproved = (classes) => {
        console.log(classes)
        const classInfo = {
            crouse_id : classes._id,
            email: classes.email,
            name: classes.name,
            price: classes.price,
            title: classes.title,
            img: classes.img,
            Experince: classes.Experince,
            Category: classes.Category,
            dec:classes.dec
        }
        console.log(classInfo)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approved it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post("/admin/Approved", classInfo)
                    .then(res => {
                        if (res.data.acknowledged) {
                            axiosSecure.patch(`/admin/Approved/status/${classes._id}`)
                                .then(res => {
                                    if (res.data.modifiedCount > 0) {
                                        Swal.fire({
                                            title: "Approved!",
                                            text: "This card has been Approved.",
                                            icon: "success"
                                          });
                                    }
                                })


                        }
                    })

            }
        });
        

    }

    const handelRejected = (id) => {
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
                axiosSecure.patch(`/admin/rejected/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div>
            <DasTtle hadding="find classes" subhading="all classes">

            </DasTtle>
            <div className=" my-5">
                <p className=" p-5 text-gray-800 text-2xl font-semibold uppercase my-3">total Classes : {AllClasses.length}</p>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5  mx-5">

                {
                    AllClasses.map(classes => <div key={classes._id} className="card  bg-base-100 shadow-xl">
                        <figure>
                            <img className="h-40 w-full"  src={classes.img} alt="Shoes" /></figure>
                            <div className="space-y-3 px-4 py-5us">
                            <p className=" text-green-500 t">{classes.title}</p>
                            <h3 className="">{classes.dec}</h3>
                            <div className="divider divider-success"></div>
                         
                            <div className=" flex justify-between gap-2 py-3">
                                <button onClick={() => hanelApproved(classes)} className=" py-2 px-4 hover:bg-green-800 text-center rounded-lg  text-white bg-green-500 ">Approved</button>
                                <button onClick={() => handelRejected(classes._id)} className="py-2 px-6 hover:bg-green-800 text-center rounded-lg  text-white bg-gray-800  ">Reject</button>
                            </div>
                        </div>
                    </div>)
                }


                          
            </div>
        </div>
    );
};

export default AllClasses;