import DasTtle from "../../Shred/DasTitle/DasTtle";


const Profile = () => {
    return (
        <div className=" h-screen  ">
            <DasTtle hadding="my Profile" subhading="aboute us">

            </DasTtle>
            <div className="flex justify-center gap-10 items-center text-center">
                <div>

                    <p>email</p>
                    <p className=" w-[300px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deleniti in quos esse repudiandae pariatur vel ratione? Nesciunt optio provident, sed possimus facere cumque! Suscipit sunt ipsa quisquam quibusdam perspiciatis.</p>
                    
                </div>
                <img className=" w-40 rounded-full h-40" src="https://i.ibb.co/DYPFq0s/istockphoto-1364917563-612x612.jpg" alt="" />
                <div>
                    <h1 className=" text-4xl font-semibold"> Saiful islam</h1>
                    <p className=" text-2xl font-semibold">email</p>
                    <p className=" text-2xl font-semibold">Admin</p>
                    <p className=" text-2xl font-semibold" >Admin</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;