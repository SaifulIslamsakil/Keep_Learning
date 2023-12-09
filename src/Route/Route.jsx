import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/NavBar/Login/Login";
import OnTech from "../Pages/OnTech/OnTech";
import AllClass from "../Pages/AllClass/AllClass";
import Books from "../Pages/Books/Books";
import DashBoord from "../Pages/DashBoord/DashBoord";
import AddClass from "../Pages/DashBoord/AddClass/AddClass";
import MyCalss from "../Pages/DashBoord/AddClass/MyClass/MyCalss";
import ClassUpate from "../Pages/ClassUpdate/ClassUpate";
import TecherRequies from "../Pages/DashBoord/Admin/TecherRequies/TecherRequies";
import AllUser from "../Pages/DashBoord/Admin/AllUser/AllUser";
import AllClasses from "../Pages/DashBoord/Admin/AllClasses/AllClasses";
import Profile from "../Pages/Profile/Profile";
import CruseDetiles from "../Pages/CruseDetiles/CruseDetiles";
import Private from "../private/Private";
import Payment from "../Pages/Payment/Payment";
import StudentClass from "../Pages/DashBoord/StudentClass/StudentClass";
import StudentClassDtls from "../Pages/DashBoord/StudentClassDtls/StudentClassDtls";
import Assignment from "../Pages/DashBoord/StudentClassDtls/Assignment";
import TecherClassDtls from "../Pages/DashBoord/TecherClassDtls/TecherClassDtls";
import AllAssignment from "../Pages/DashBoord/TecherClassDtls/AllAssignment";
import CreateAssignment from "../Pages/DashBoord/TecherClassDtls/CreateAssignment";
import AdminPrivate from "../AdminPrivate/AdminPrivate";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:"",
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/On-tech",
                element:<OnTech></OnTech>
            },
            {
                path:"/All-Class",
                element:<AllClass></AllClass>
            },
            {
                path:"/Books",
                element:<Books></Books>
            },
            {
                path:"/cruseDetiles/:id",
                element:<Private><CruseDetiles></CruseDetiles></Private>,
                loader:({params})=> fetch(`https://keep-learning-server.vercel.app/cruseDetiles/${params.id}`)
                
            },
            {
                path:"/payment-Info/:id",
                element:<Private><Payment></Payment></Private>,
                loader:({params})=> fetch(`https://keep-learning-server.vercel.app/payment-Info/${params.id}`)

                
                
            },
        ]
    },
    {
        path:"/Register",
        element:<Register></Register>
    },
    {
        path:"/Login",
        element:<Login></Login>
    },

    {
        path:"/Dashboord",
        element:<Private><DashBoord></DashBoord></Private>,
        children:[
            {
                path:"addclass",
                element:<Private><AddClass></AddClass></Private>
            },
            {
                path:"MyClass",
                element:<Private><MyCalss></MyCalss></Private>
            },
            {
                path:"Student-Class",
                element:<Private><StudentClass></StudentClass></Private>
            },
            {
                path:"Student-Class-dtls/:id",
                element:<Private><StudentClassDtls></StudentClassDtls></Private>,
                loader:({params})=> fetch(`https://keep-learning-server.vercel.app/Student-Class-dtls/${params.id}`)
            },
            {
                path:"Assignment/:id",
                element:<Private><Assignment></Assignment></Private>,
                loader:({params})=> fetch(`https://keep-learning-server.vercel.app/Assignment/${params.id}`)


            },
            {
                path:"Techer-ClassDtls/:id",
                element:<Private><TecherClassDtls></TecherClassDtls></Private>,
                loader:({params})=> fetch(`https://keep-learning-server.vercel.app/update_Class/${params.id}`)


            },
            {
                path:"All-Assignment/:id",
                element:<Private><AllAssignment></AllAssignment></Private>,
                loader:({params})=> fetch(`https://keep-learning-server.vercel.app/Assignment/${params.id}`)

            },
            {
                path:"Create-Assignment/:id",
                element:<Private><CreateAssignment></CreateAssignment></Private>
            },

            {
                path:"ClassUpdate/:id",
                element:<Private><ClassUpate></ClassUpate></Private>,
                loader: ({params})=> fetch(`https://keep-learning-server.vercel.app/update_Class/${params.id}`)
            },
            {
                path:"admin/Techer-requiest",
                element:<AdminPrivate><Private><TecherRequies></TecherRequies></Private></AdminPrivate>

            },
            {
                path:"admin/All-User",
                element:<Private><AdminPrivate><AllUser></AllUser></AdminPrivate></Private>

            },
            {
                path:"admin/All-Classes",
                element:<Private><AdminPrivate><AllClasses></AllClasses></AdminPrivate></Private>

            },
            {
                path:"admin/Profile",
                element:<Private><AdminPrivate><Profile></Profile></AdminPrivate></Private>

            }
        ]
    }
])
export default Router