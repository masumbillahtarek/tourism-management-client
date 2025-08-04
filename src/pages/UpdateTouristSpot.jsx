import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateTouristSpot = () => {
    const spot=useLoaderData()
    const handleUpdateTouristsSpot=(e)=>{
          e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
        const photo=form.photo.value
        const spotName=form.spotName.value
        const countryName=form.countryName.value
        const spotLocation=form.spotLocation.value
        const cost=form.cost.value
        const season=form.season.value
        const time=form.time.value
        const totalVisitors=form.totalVisitors.value
        const description=form.description.value
        console.log(name,email,photo,spotName,countryName,spotLocation,cost,season,time,totalVisitors,description)
        const updatedSpot={name,email,photo,spotName,countryName,spotLocation,cost,season,time,totalVisitors,description}
        fetch(`http://localhost:3000/touristsSpots/${spot._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
               Swal.fire({
                 position: "center",
                 icon: "success",
                 title: "SuccessFully Updated",
                 showConfirmButton: false,
                 timer: 2000
               });
            }
        })
    }
    return (
     <div>
           <h3 className="text-3xl font-bold text-center my-8">Update Tourist Spot Page : {spot.spotName}</h3>
           <form onSubmit={handleUpdateTouristsSpot} className="grid grid-cols-2 gap-6">
               <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Tourists Spot Name</span>
          </label>
          <input type="text" name="spotName" defaultValue={spot.spotName} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Country Name</span>
          </label>
          <input type="text" name="countryName" defaultValue={spot.countryName} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Spot Location</span>
          </label>
          <input type="text" name="spotLocation" defaultValue={spot.spotLocation} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Photo URL</span>
          </label>
          <input type="text" name="photo" defaultValue={spot.photo} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Average Cost</span>
          </label>
          <input type="text" name="cost" defaultValue={spot.cost} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Seasonality</span>
          </label>
          <input type="text" name="season" defaultValue={spot.season} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Travel Time</span>
          </label>
          <input type="text" name="time" defaultValue={spot.time} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Total Visitors Per Year</span>
          </label>
          <input type="text" name="totalVisitors" defaultValue={spot.totalVisitors} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">User Name</span>
          </label>
          <input type="text" name="name" defaultValue={spot.name} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">User Email</span>
          </label>
          <input type="email" name="email" defaultValue={spot.email} class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
            <div className="col-span-2">
        <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Short Description</span>
          </label>
         <textarea name="description"  className="border-2 border-black py-2 px-4 rounded-lg">{spot.description}</textarea>
        </div>
        <div class="">
          <input type="submit" name="" value="Update Tourists Spot" class="border-2 text-xl btn btn-primary  px-4 rounded-lg w-full my-6" />
        </div>
            </div>
           </form>
        </div>
    );
};

export default UpdateTouristSpot;