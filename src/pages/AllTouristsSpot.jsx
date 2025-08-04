import { useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {
    const spots=useLoaderData()
    return (
        <div>
            <h2 className="text-3xl text-center my-6">All Tourists Spot : {spots.length}</h2>
   <div className="grid grid-cols-2 gap-8">
    {
        spots.map(spot=><Spot spot={spot}></Spot>)
    }
   </div>
        </div>
    );
};
const Spot=({spot})=>{
    const{photo,spotName,cost,season,time,totalVisitors}=spot
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
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    )
}
export default AllTouristsSpot;