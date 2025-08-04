import { useContext } from "react";
import Banner from "../shared/Banner";
import TouristsSpot from "../shared/TouristsSpot";
import { AuthContext } from "../authProvider/AuthProvider";


const Home = () => {
    const{loading}=useContext(AuthContext)
     if(loading){
        return <div className="flex justify-center my-24"> <span className="loading  loading-spinner loading-lg"></span></div>
    }
    return (
        <div>
        <Banner></Banner>
        <TouristsSpot></TouristsSpot>
        </div>
    );
};

export default Home;