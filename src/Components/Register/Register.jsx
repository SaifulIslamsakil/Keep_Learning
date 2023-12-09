import { useForm } from "react-hook-form"
import img from "../../assets/Register/img2.svg"
import { useContext } from "react";
import { AuthContex } from "../../Provider/Provider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPulic from "../../Hooks/useAxiosPulic";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import Auth from "../../Pages/HomePage/Footer/FireBase-Confiq";

const Imgbb_key = "8e63e023b6716f56295b0c1df1b0048a"
const createImgbbUrl = `https://api.imgbb.com/1/upload?key=${Imgbb_key}`


const Register = () => {
    const { userRegister } = useContext(AuthContex)
    const [AxiosPublic] = useAxiosPulic()
    const navigete = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit =async (data) => {
        console.log(data)
        const imgFile = {image : data.file[0]}
        const PhotoUrl = await AxiosPublic.post(createImgbbUrl,imgFile,{
            headers:{
                'content-Type' : 'multipart/form-data'
            }
        })
        // console.log(res.data.data.url)
        userRegister(data.email, data.password)
            .then(res => {
                console.log(res)
                updateProfile(Auth?.currentUser,{
                    displayName:data.name,
                    photoURL:PhotoUrl?.data?.data?.url
                })
                .then(res=>{
                    const userInfo = {
                        email: data.email,
                        name:data.name,
                        img:PhotoUrl.data.data.url
                    }

                    AxiosPublic.post("/user", userInfo)
                    .then(res=>{
                        if(res.data.acknowledged){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
    
                    })
                    navigete("/")
                    
                })

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className=" bg-green-50 flex justify-around items-center h-screen">
            <div className=" flex-1">
                <img className=" w-3/4 mx-auto" src={img} alt="" />
            </div>
            <div className="  flex-1">
                <h2 className=" text-center text-3xl font-bold">Please <span className=" text-green-600">Register</span></h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email")} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} placeholder="Password" className="input input-bordered" required />
                        {errors.password?.type === "required" && <span className=" text-red-500">password is required</span>}
                        {errors.password?.type === "minLength" && <span className=" text-red-500">your Password must be 6 chareter</span>}
                        {errors.password?.type === "pattern" && <span className=" text-red-500">your Password must be an number an uppercase an lowercase an spcial careater</span>}
                    </div>
                    <div className="form-control mt-5">
                        <input type="file" {...register("file")} className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                    </div>
                    <div className=" mt-4">
                            <p className="">You have an acount ? <Link to="/Login"> <span className=" text-green-500 font-semibold hover:underline">please Login</span>
                            </Link>
                            </p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-500 hover:bg-green-800 text-white text-center">Register</button>
                    </div>
                    <div className="divider divider-success">OR</div>
                </form>

            </div>
        </div>
    );
};

export default Register;