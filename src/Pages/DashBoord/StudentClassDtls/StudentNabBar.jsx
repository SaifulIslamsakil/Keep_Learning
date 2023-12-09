import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../../Provider/Provider";

const StudentNabBar = ({coruse_id}) => {
    const {user} = useContext(AuthContex)
    console.log(coruse_id)
    
    return (
        <div>
            <nav className="p-5 flex justify-between items-center bg-white ">
                <div>
                    <h2 className=" text-2xl font-semibold"> KEEP  <span className=" text-green-500">LESRNING</span> </h2>
                </div>
                <div>
                    <ul className="flex gap-4 items-center">
                        <li>
                            <NavLink to={`/Dashboord/Assignment/${coruse_id}`} className=" font-semibold hover:text-green-500">
                                Assignment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className=" font-semibold hover:text-green-500">
                                Support
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className=" font-semibold hover:text-green-500">
                                Concept Crackerz

                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/Student-Class-dtls/dtls" className=" font-semibold hover:text-green-500">
                            Blog

                            </NavLink>
                        </li>
                        <li>
                            <NavLink className=" font-semibold hover:text-green-500">
                                <img className=" w-14 h-14 rounded-full" src={user?.photoURL} alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default StudentNabBar;