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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
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
            loader:()=>fetch('http://localhost:3000/touristsSpots')
        },
        {
            path:'/addTouristsSpot',
            element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        },
        {
            path:'/myList',
            element:<PrivateRoute><MyList></MyList></PrivateRoute>
        }
    ]
  },
]);
export default router;