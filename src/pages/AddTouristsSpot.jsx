import Swal from 'sweetalert2'

const AddTouristsSpot = () => {
    const HandleAddTouristsSpot=(e)=>{
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
        const spot={name,email,photo,spotName,countryName,spotLocation,cost,season,time,totalVisitors,description}
        fetch('https://tourism-management-server-demta93rh.vercel.app/touristsSpots',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(spot)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
Swal.fire({
  position: "center",
  icon: "success",
  title: "SuccessFully Added",
  showConfirmButton: false,
  timer: 2000
});
form.reset()
            }
        })
    }
    return (
        <div>
           <h3 className="text-3xl font-bold text-center my-8">Add Tourists Spot Page</h3>
           <form onSubmit={HandleAddTouristsSpot} className="grid grid-cols-2 gap-6">
               <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Tourists Spot Name</span>
          </label>
          <input type="text" name="spotName" placeholder="Write Tourists Spot Name" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Country Name</span>
          </label>
          <input type="text" name="countryName" placeholder="Write Country Name" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Spot Location</span>
          </label>
          <input type="text" name="spotLocation" placeholder="Write Spot Location" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Write Photo URL" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Average Cost</span>
          </label>
          <input type="text" name="cost" placeholder="Write Average Cost" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Seasonality</span>
          </label>
          <input type="text" name="season" placeholder="Write Seasonality" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Travel Time</span>
          </label>
          <input type="text" name="time" placeholder="Write Travel Time" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Total Visitors Per Year</span>
          </label>
          <input type="text" name="totalVisitors" placeholder="Write Amount of Visitors Per Year" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">User Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
                <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">User Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" class="border-2 border-black py-2 px-4 rounded-lg" required />
        </div>
            <div className="col-span-2">
        <div class="flex flex-col">
          <label class="label">
            <span class="label-text text-2xl font-semibold">Short Description</span>
          </label>
         <textarea name="description"  className="border-2 border-black py-2 px-4 rounded-lg">Write Short Description</textarea>
        </div>
        <div class="">
          <input type="submit" name="" value="Add Tourists Spot" class="border-2 text-xl btn btn-primary  px-4 rounded-lg w-full my-6" />
        </div>
            </div>
           </form>
        </div>
    );
};

export default AddTouristsSpot;