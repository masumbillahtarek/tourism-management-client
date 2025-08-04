import { useLoaderData } from "react-router-dom";


const TouristsSpotDetails = () => {
    const spot=useLoaderData()
    const{name,email,photo,spotName,countryName,spotLocation,cost,season,time,totalVisitors,description}=spot
    return (
        <div className="my-12 mx-40">
            <h2 className="text-3xl mx-[-150px] font-bold text-center bg-slate-300 text-black py-2 rounded-xl mb-6">Tourist Spot Details Page</h2>
                          <div className="card bg-[#24232311] w-full shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl w-full h-[500px]" />
  </figure>
  <div className="card-body items-center ">
    <h2 className="card-title text-3xl">Spot Name :{spotName}</h2>
    <div className="flex flex-col gap-2 my-3 text-2xl">
        
 <h2><span className="font-bold">Total Visitors Per Year : </span>{totalVisitors}</h2>
    <h2><span  className="font-bold">Average Cost : </span>{cost}</h2>
        
        
            <h2><span  className="font-bold">Seasonality : </span>{season}</h2>
            <h2><span  className="font-bold">Travel Time : </span>{time}</h2>
            
                <h2><span className="font-bold">Country Name : </span>{countryName}</h2>
                <h2><span className="font-bold">Spot Location : </span>{spotLocation}</h2>
            
            <div  className="flex justify-between items-center">
                <h2><span className="font-bold">User Name : </span>{name}</h2>
                <h2><span className="font-bold">User Email : </span>{email}</h2>
            </div>
            <p><span className="font-bold">Spot Description : </span>{description}</p>
        
    </div>
   
  
  </div>
</div>
        </div>
    );
};

export default TouristsSpotDetails;