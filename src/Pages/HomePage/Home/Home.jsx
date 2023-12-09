import Banner from "../Banner/Banner";
import BeComeTeacher from "../BeComeTeacher/BeComeTeacher";
import Extera from "../Extera/Extera";
import ExtraTow from "../ExtraTow/ExtraTow";
import HighlightCruse from "../HighlightCruse/HighlightCruse";
import Patner from "../Patner/Patner";
import Reviews from "../Reviews/Reviews";
import ShowCaseUser from "../ShowCaseUser/ShowCaseUser";

const Home = () => {
    return (
        <div className=" space-y-20">
           <Banner></Banner>
           <Extera></Extera>
           <Patner></Patner>
           <HighlightCruse></HighlightCruse>
           <ShowCaseUser></ShowCaseUser>
           <ExtraTow></ExtraTow>
           <BeComeTeacher></BeComeTeacher>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;