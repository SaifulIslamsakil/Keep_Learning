

const DasTtle = ({hadding, subhading}) => {
    return (
        <div className=" text-center uppercase my-10 space-y-3 ">
           <h2 className="text-xl font-semibold">~~~~ {subhading} ~~~~</h2>
           <h3 className=" text-green-500 text-3xl font-bold">{hadding}</h3> 
        </div>
    );
};

export default DasTtle;