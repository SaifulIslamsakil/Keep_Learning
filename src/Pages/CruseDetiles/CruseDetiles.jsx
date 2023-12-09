import { Link, useLoaderData } from "react-router-dom";
const CruseDetiles = () => {
    const cartData = useLoaderData()
    console.log(cartData)
    const {Experince,title,price,img} = cartData
   
    return (
        <div className="lg:flex  gap-4 w-11/12 p-5 mx-auto my-3">
            <div className=" w-3/5 ">
                <div className=" space-y-3">
                <img className=" w-full" src={img} alt="" />

                    <p className=" text-2xl font-semibold">{Experince}</p>
                    <h3 className=" text-4xl font-bold border-l-4 border-green-500 px-4">{title}</h3>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className=" text-xl">Artificial intelligence (AI) is wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.</p>
                    <div className=" flex gap-4">
                        <button className=" bg-green-500 hover:bg-gray-800 text-white uppercase text-xl  btn">Take this coruse</button>
                        <button className="  hover:bg-green-500 bg-gray-800 text-white uppercase text-xl  btn">Price : $ {price}</button>
                    </div>
                </div>
                <div className="divider divider-success"></div>
                <div className=" space-y-3 border p-5">
                    <h3 className=" border-l-4 border-green-500 px-4 text-4xl font-bold ">Included in this course</h3>
                    <p className=" text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam nec suscipit nulla, eget rhoncus erat. Curabitur quis ultricies justo.
                        Integer feugiat augue augue, quis laoreet mi molestie sed. Donec condimentum risus et facilisis aliquet.
                        Quisque aliquet sollicitudin magna a ullamcorper. Maecenas elementum pharetra felis in cursus.
                        Curabitur pulvinar vel mauris et rhoncus. Ut nunc mauris, rhoncus vitae placerat non, luctus non augue.
                        Nullam dictum metus in turpis ornare sagittis. Suspendisse id enim ut ligula luctus dictum nec viverra augue.
                        Phasellus non posuere turpis. In vehicula scelerisque mauris, eget ullamcorper mi tristique sed.
                        Etiam porta tortor non diam porta sagittis. Mauris placerat diam eget tellus suscipit consequat.
                        Phasellus eu sapien interdum quam ultricies molestie vel et ipsum.
                        Nam id tortor eu libero luctus pellentesque ac sed lectus.</p>
                    <h3 className=" border-l-4 border-green-500 px-4 text-3xl font-bold">Description</h3>
                    <p className=" text-xl">Fusce dapibus lacinia volutpat. Fusce tincidunt turpis ac feugiat varius. Etiam tincidunt lorem tortor, hendrerit sagittis tellus fermentum sed. Duis interdum sapien ante, sit amet maximus augue ultricies at. Aenean eros massa, luctus id porta at, ultrices ut sapien. Integer at pulvinar sapien. Aenean turpis arcu, vehicula sit amet tortor sed, eleifend ultrices mauris. Quisque sollicitudin erat ex, id eleifend eros congue ut. Proin pretium odio et lorem bibendum pulvinar. Etiam dapibus id metus eget consectetur. Fusce ultrices elit et augue posuere, vel condimentum enim pharetra. Nullam id ultrices tortor. Praesent vestibulum mattis tempor. Nulla mollis odio et mauris vulputate rutrum. Vestibulum hendrerit, nulla id eleifend aliquam, leo libero tincidunt risus, nec hendrerit risus orci id enim. Nam et felis sodales, dictum urna sit amet, imperdiet lacus. Praesent finibus ante sit amet eros dictum consectetur. Nam luctus in ipsum in gravida. Nunc sit amet felis eget ex laoreet mollis. Nulla vitae ullamcorper diam, nec tincidunt metus. Proin aliquam mauris erat, malesuada pharetra magna sagittis sit amet. Vestibulum eu nisl sapien. Quisque faucibus, justo in tempor porttitor, elit magna interdum turpis, sed cursus nisi lectus vitae ligula. Sed elit felis, dapibus id semper quis, ultrices ac elit. Aenean non laoreet enim, a eleifend nunc. Fusce scelerisque odio nec ultrices feugiat. Quisque luctus tincidunt sodales. Donec metus nisi, congue eget velit nec, auctor porta lectus.</p>
                   
                </div>

            </div>
            <div className=" p-5 space-y-10 w-[40%] ">
                <img className="" src={img} alt="" />
                <h4 className=" border-l-4 border-green-500 px-4 text-3xl font-bold">About Instructor</h4>
                <p>Phasellus non posuere turpis. In vehicula scelerisque mauris, eget ullamcorper mi tristique sed.
                    Etiam porta tortor non diam porta sagittis. Mauris placerat diam eget tellus suscipit consequat.
                    Phasellus eu sapien interdum quam ultricies molestie vel et ipsum.
                    Nam id tortor eu libero luctus pellentesque ac sed lectus.</p>
                    <Link to={`/payment-Info/${cartData._id}`}>
                    <button  className=" btn w-full uppercase bg-green-500 hover:bg-gray-800 text-white">Pay now</button>
                    </Link>
            </div>
        </div>
    );
};

export default CruseDetiles;