

const PageBanner = ({ImagePath,Hadding}) => {
    return (
        <div className=" h-[70vh] text-white" style={{backgroundImage:`url(${ImagePath})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className=" w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <h3>{Hadding}</h3>
            </div>
        </div>
    );
};

export default PageBanner