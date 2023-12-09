import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../Hooks/UserAdmin/UseAdmin";



const DashBoord = () => {
    const {isAdmin} = UseAdmin()
    console.log(isAdmin)
    return (
        <div className=" flex ">
            <div className=" w-72  pt-10 px-6 bg-black text-white text-2xl font-semibold  ">
                <ul className=" space-y-4">
                    {
                        isAdmin?.checkAdmin ? <>
                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                } to="/Dashboord">
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                } to="/Dashboord/admin/Techer-requiest">
                                    Teacher Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                } to="/Dashboord/admin/All-User">
                                    All Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                } to="/Dashboord/admin/All-Classes">
                                    All classes
                                </NavLink>
                            </li>
                        </> : isAdmin?.checkTecher ? <>
                            <>
                                <li>
                                    <NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                    } to="/Dashboord/admin/Profile">
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                    } to="/Dashboord/addclass">
                                        Add class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                    } to="/Dashboord/MyClass">
                                        My class
                                    </NavLink>
                                </li>
                            </>
                        </> : <>

                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-l-4 border-green-500 px-2 text-green-500 " : "hover:bg-green-500 hover:text-white"
                                } to="/Dashboord/Student-Class">
                                    My enroll class
                                </NavLink>
                            </li>
                        </>

                    }

                </ul>
                <div className="divider divider-success"></div>
                <ul className=" space-y-2">
                    <li>
                        <NavLink className=" hover:bg-green-500 hover:text-white" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className=" hover:bg-green-500 hover:text-white" to="/All-Class" >
                            All Class
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className= "hover:bg-green-500 hover:text-white" to="/On-tech">
                            Oh Tech
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className= "hover:bg-green-500 hover:text-white" to="/Books">
                            Books
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className=" mx-auto flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoord;