import { useLoaderData } from "react-router-dom";


const Assignment = () => {
    const AssignmetData = useLoaderData()
    return (
        <div className=" h-screen space-y-10">
            <h1 className=" text-center mt-6 text-2xl font-bold text-green-500">All Assignment</h1>
            <div className=" m-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className=" bg-green-500 text-white text-xl font-bold">
                            <tr>
                                <th>
                                    ##
                                </th>
                                <th>image</th>
                                <th>Title</th>
                                <th>DateLine</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                AssignmetData.map((Assignment,ids)=><tr className=" font-bold" key={Assignment._id}>
                                    <th>
                                        {ids+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={Assignment.Img} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        {Assignment.Dec}
                                        </td>
                                    
                                    <td>{Assignment.Date_line}</td>
                                    <th>
                                        <button className="btn  bg-gray-800 text-white hover:bg-green-500">Submit</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Assignment;