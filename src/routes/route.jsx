import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "../private/PrivateRoute";
import Home from "../pages/Home";
import TouristsSpot from "../shared/TouristsSpot";
import UpdateTouristSpot from "../pages/UpdateTouristSpot";
import TouristsSpotDetails from "../pages/TouristsSpotDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
path:'/',
element:<Home></Home>
      },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/allTouristsSpot',
            element:<AllTouristsSpot></AllTouristsSpot>,
            loader:()=>fetch('https://tourism-management-server-demta93rh.vercel.app/touristsSpots')
        },
        {
            path:'/addTouristsSpot',
            element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        },
        {
            path:'/myList',
            element:<PrivateRoute><MyList></MyList></PrivateRoute>,
             loader:()=>fetch('https://tourism-management-server-demta93rh.vercel.app/touristsSpots')
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
          loader:({params})=>fetch(`https://tourism-management-server-demta93rh.vercel.app/touristsSpots/${params.id}`)
        },
        {
            path:'/spotDetails/:id',
          element:<PrivateRoute><TouristsSpotDetails></TouristsSpotDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://tourism-management-server-demta93rh.vercel.app/touristsSpots/${params.id}`)
        }
    ]
  },
]);
export default router;