import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// const Imgbb_key = "8e63e023b6716f56295b0c1df1b0048a"
// const createImgbbUrl = `https://api.imgbb.com/1/upload?key=${Imgbb_key}`
const CreateAssignment = () => {
    const AxiosSecure = useAxiosSecure()
    const id = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const handelAddClass = async (data) => {
        // const imgFile = { image: data.file[0] }
        // const PhotoUrl = await AxiosSecure.post(createImgbbUrl, imgFile, {
        //     headers: {
        //         'content-Type': 'multipart/form-data'
        //     }
        // })
        const AssignmnetInfo = {
            Assignment_id: id.id,
            // Img: PhotoUrl.data.data.url,
            Img: "https://i.ibb.co/2sqcdmx/download-1.jpg",
            Date_line: data.dateline,
            Dec: data.dec
        }
        console.log(AssignmnetInfo)
        AxiosSecure.post("/Created-Assignment", AssignmnetInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className=" w-full mx-auto p-6  ">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="text-2xl font-bold">Additional INFO</p>
                                <p>Please Provide your information.</p>
                            </div>

                            <div className="lg:col-span-2">

                                <form onSubmit={handleSubmit(handelAddClass)}>

                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">

                                        <div className="form-control md:col-span-2">
                                            <label className=" label">
                                                <span className="label-text">
                                                    Title
                                                </span>
                                            </label>
                                            <input className="input input-bordered" type="text" {...register("Title", { required: true })} placeholder="Enter your name" />
                                            {errors.name && <span className=" text-red-500">This field is required</span>}
                                        </div>
                                        <div className="form-control md:col-span-2">
                                            <label className=" label">
                                                <span className="label-text">
                                                    DateLine
                                                </span>
                                            </label>
                                            <input className="input input-bordered" type="date" {...register("dateline", { required: true })} placeholder="Enter your name" />
                                            {errors.name && <span className=" text-red-500">This field is required</span>}
                                        </div>

                                        <div className="form-control md:col-span-4">
                                            <label className="label">
                                                <span className="label-text">Description
                                                </span>

                                            </label>
                                            <textarea {...register("dec")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                                        </div>
                                        {/* <div className=" md:col-span-5 space-y-2">
                                            <div>
                                                <label > Upload your Images </label>
                                            </div>
                                            <input {...register("file")} type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                                        </div> */}

                                        <div className="md:col-span-5">
                                            <div className="inline-flex items-center">
                                                <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                                <label className="ml-2">My billing address is different than above.</label>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">

                                                <input type="submit" value="Create Assignment" id="" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" />

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;