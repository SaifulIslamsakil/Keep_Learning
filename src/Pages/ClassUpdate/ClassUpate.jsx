
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const Imgbb_key = "8e63e023b6716f56295b0c1df1b0048a"
const createImgbbUrl = `https://api.imgbb.com/1/upload?key=${Imgbb_key}`

const ClassUpate = () => {
    const AxiosSecure = useAxiosSecure()
    const UpdateData = useLoaderData()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handelUpdate = async (data) => {
        const imgFile = { image: data.file[0] }
        const PhotoUrl = await AxiosSecure.post(createImgbbUrl, imgFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        const updateInfo = {
            email: data.Email,
            name: data.name,
            price: data.Price,
            title: data.title,
            img: PhotoUrl.data.data.url,
            Experince: data.Experince,
            Category: data.Category
        }
        console.log(updateInfo)
        AxiosSecure.put(`/Class-update/${UpdateData._id}`, updateInfo)
            .then(res => {
                console.log(res.data)
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

                                <form onSubmit={handleSubmit(handelUpdate)}>

                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                                        <div className="form-control md:col-span-2">
                                            <label className=" label">
                                                <span className="label-text">
                                                    Name
                                                </span>
                                            </label>
                                            <input defaultValue={UpdateData.name} readOnly className="input input-bordered" type="text" {...register("name", { required: true })} placeholder="Enter your name" />
                                            {errors.name && <span className=" text-red-500">This field is required</span>}
                                        </div>

                                        <div className="form-control md:col-span-2">
                                            <label className=" label">
                                                <span className="label-text">
                                                    Email
                                                </span>
                                            </label>
                                            <input defaultValue={UpdateData.email} readOnly className="input input-bordered" type="email" {...register("Email", { required: true })} placeholder="Enter your name" />
                                            {errors.Email && <span className=" text-red-500">This field is required</span>}
                                        </div>

                                        <div className="form-control md:col-span-2">
                                            <label className=" label">
                                                <span className="label-text">
                                                    title
                                                </span>
                                            </label>
                                            <input defaultValue={UpdateData.title} className="input input-bordered" type="text" {...register("title", { required: true })} placeholder="Enter your name" />
                                            {errors.title && <span className=" text-red-500">This field is required</span>}
                                        </div>

                                        <div className="form-control md:col-span-2">
                                            <label className=" label">
                                                <span className="label-text">
                                                    Price
                                                </span>
                                            </label>
                                            <input defaultValue={UpdateData.price} className="input input-bordered" type="text" {...register("Price", { required: true })} placeholder="Enter your name" />
                                            {errors.price && <span className=" text-red-500">This field is required</span>}
                                        </div>

                                        <div className="form-control w-full md:col-span-2 max-w-xs">
                                            <label className="label">
                                                Select your exprince
                                            </label>
                                            <select {...register("Experince")} className="select select-bordered">
                                                <option disabled selected>Select one</option>
                                                <option value="Web-Development">Web-Development</option>
                                                <option value="Apps-Development">Apps-Development</option>
                                                <option value="Degital-Marketing">Degital-Marketing</option>
                                                <option value="Freelancing">Freelancing</option>
                                            </select>
                                        </div>

                                        <div className="form-control w-full md:col-span-2 max-w-xs">
                                            <label className="label">
                                                Select your Category
                                            </label>
                                            <select {...register("Category")} className="select select-bordered">
                                                <option disabled selected>select one</option>
                                                <option value="beginner">beginner</option>
                                                <option value="Higest level">Higest level</option>
                                                <option value="Pro level">Pro level</option>

                                            </select>
                                        </div>
                                        <div className="form-control md:col-span-4">
                                            <label className="label">
                                                <span className="label-text">Description
                                                </span>

                                            </label>
                                            <textarea className="textarea textarea-bordered h-24" placeholder="crouse detiles"></textarea>

                                        </div>
                                        <div className=" md:col-span-5 space-y-2">
                                            <div>
                                                <label > Upload your Images </label>
                                            </div>
                                            <input {...register("file")} type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <div className="inline-flex items-center">
                                                <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                                <label className="ml-2">My billing address is different than above.</label>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">

                                                <input type="submit" value="Update now" id="" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" />

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

export default ClassUpate;