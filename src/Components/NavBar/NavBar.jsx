import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContex } from "../../Provider/Provider";

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false)
    const { user, userLogout } = useContext(AuthContex)


    const links = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"
            }>
                Home
            </NavLink>
        </li>

        <li>

            <NavLink to="/All-Class" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"
            }>
                All classes
            </NavLink>
        </li>
        <li>

            <NavLink to="/On-tech" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"
            }>
                On Tech
            </NavLink>
        </li>
        <li>

            <NavLink to="/Books" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"
            }>
                Books
            </NavLink>
        </li>
    </>
    const hanelLogout = () => {
        userLogout()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className=" bg-blue-950 p-3 text-white">
                <p className=" text-center">Discount up to 50% for first purchase. Free trial 7 days!</p>
            </div>
            <div className="navbar bg-white border-b shadow-lg relative text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className=" hidden md:flex items-center">
                        <img className=" w-32" src='https://i.ibb.co/rpJCvmR/360-F-102517057-4-Tedp0g-Kw-Ck-Wwu54k-Kni0-GZ0-Dq-IWe5-MY.jpg' alt="" />
                        <h3 className=" uppercase text-2xl font-semibold">Keep <span className=" text-green-500">Learning</span> </h3>
                    </div>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal space-x-1 px-1 uppercase text-sm">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <h4 className=" text-sm font-semibold uppercase mr-3">{user.displayName}</h4>
                            <img onClick={() => setDropdown(!dropdown)} className=" w-10 h-10 rounded-full" src={user?.photoURL} alt="hover:bg-green-500 hover:text-white" />
                        </> : <>
                            <ul className="menu menu-horizontal space-x-3 px-1 uppercase text-sm">
                                <li>

                                    <NavLink to="/Register" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "" : "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                                    }>
                                        Register
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Login" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "" : "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                                    }>
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        </>
                    }

                </div>
                {user && <div className={`  p-5 duration-500 absolute bg-green-500 right-6 rounded-lg top-20 ${dropdown ? "block" : " hidden "} `}>
                    <ul className=" text-sm font-semibold uppercase space-y-2 text-white">

                        <li className=" hover:underline hover:text-black">Profile</li>
                        <li className=" hover:underline hover:text-black"><Link to="/Dashboord">DashBoord</Link></li>
                        <li onClick={hanelLogout} className=" hover:underline hover:text-black">Logout</li>
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default NavBar;