import { NavLink } from "react-router-dom";


const TecherDtlsNavBar = ({id}) => {
    console.log(id)
    return (
        <div>
            <nav className="p-5 flex justify-between items-center bg-white ">
                <div>
                    <h2 className=" text-2xl font-semibold"> KEEP  <span className=" text-green-500">LESRNING</span> </h2>
                </div>
                <div>
                    <ul className="flex gap-4 items-center">
                        <li>
                            <NavLink to={`/Dashboord/All-Assignment/${id}`} className=" font-semibold hover:text-green-500">
                                All Assignment
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={`/Dashboord/Create-Assignment/${id}`} className=" font-semibold hover:text-green-500">
                                Create Assignment
                            </NavLink>
                        </li>
                       
                       
                        
                        <li>
                            <NavLink to="/Student-Class-dtls/dtls" className=" font-semibold hover:text-green-500">
                            Blog

                            </NavLink>
                        </li>
                        <li>
                            <NavLink className=" font-semibold hover:text-green-500">
                                <img className=" w-14 h-14 rounded-full" src="https://i.ibb.co/3WggRvg/istockphoto-1364917563-612x612.jpg" alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default TecherDtlsNavBar;