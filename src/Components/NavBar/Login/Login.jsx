import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "../../../Provider/Provider";
import img from "../../../assets/Register/img2.svg"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const {userLogin}= useContext(AuthContex)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        userLogin(data?.email, data?.password)
        .then(res=>{
            console.log(res)
            reset()
            navigate("/")
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className=" bg-green-50 flex justify-around items-center h-screen">
            <div className=" flex-1">
                <img className=" w-3/4 mx-auto" src={img} alt="" />
            </div>
            <div className="  flex-1">
                <h2 className=" text-center text-3xl font-bold">Please <span className=" text-green-600">LogIn</span></h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto">
                  
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
                        <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })}  placeholder="Password" className="input input-bordered" required />
                        {errors.password?.type === "required" && <span className=" text-red-500">password is required</span>}
                        {errors.password?.type === "minLength" && <span className=" text-red-500">your Password must be 6 chareter</span>}
                        {errors.password?.type === "pattern" && <span className=" text-red-500">your Password must be an number an uppercase an lowercase an spcial careater</span>}
                    </div>

                    <div className=" mt-4">
                            <p className="">You need an acount ? <Link to="/Register"> <span className=" text-green-500 font-semibold hover:underline">please Register</span>
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

export default Login;