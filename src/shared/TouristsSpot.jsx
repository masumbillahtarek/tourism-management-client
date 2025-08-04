import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const TouristsSpot = () => {
   const[spots,setSpots]=useState([])
   useEffect(()=>{
    fetch('http://localhost:3000/touristsSpots')
    .then(res=>res.json())
    .then(data=>setSpots(data))
   },[])
   console.log(spots)
   const sixSpots=spots.slice(0,6)
    return (
        <div>
            <h2 className="text-3xl text-center my-6">Tourists Spots</h2>
            <p className="text-xl text-center px-48 mb-8">Tourist spots offer travelers the privilege of exploring natural beauty, cultural heritage, and local traditions. These destinations provide opportunities for relaxation, adventure, learning, and memorable experiences. They contribute to mental well-being, promote global understanding, and support local economies through tourism-related services like hospitality, transport, and handicrafts.</p>
           <div className="grid grid-cols-2 gap-8">
    {
        sixSpots.map(spot=><Spot spot={spot}></Spot>)
    }
   </div>
        </div>
    );
};

const Spot=({spot})=>{
    const{_id,photo,spotName,cost,season,time,totalVisitors}=spot
    return(
               <div className="card bg-[#24232311] w-full shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl w-[480px] h-[400px]" />
  </figure>
  <div className="card-body items-center ">
    <h2 className="card-title text-3xl">Spot Name :{spotName}</h2>
    <div className="flex flex-col gap-2 my-3 text-2xl">
        
 <h2><span className="font-bold">Total Visitors Per Year : </span>{totalVisitors}</h2>
    <h2><span  className="font-bold">Average Cost : </span>{cost}</h2>
        
        
            <h2><span  className="font-bold">Seasonality : </span>{season}</h2>
            <h2><span  className="font-bold">Travel Time : </span>{time}</h2>
        
    </div>
   
    <div className="card-actions">
    <Link to={`/spotDetails/${_id}`}>  <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    )
}
export default TouristsSpot;