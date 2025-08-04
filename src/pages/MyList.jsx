import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyList = () => {
    const loadedSpots=useLoaderData()
    const[spots,setSpots]=useState(loadedSpots)
    const handleDelete=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
          fetch(`http://localhost:3000/touristsSpots/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
                const remaining=spots.filter(spot=>spot._id!==id)
                setSpots(remaining)
            }
        })
  }
});
        
    }
    return (
        <div>
            <h2>My List</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl">
        <th>Spot Name</th>
        <th>Spot Location</th>
        <th>User Name</th>
        <th>Update btn</th>
        <th>Delete btn</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        spots.map(spot=> <tr className="text-xl">
        <td>{spot?.spotName}</td>
        <td>{spot?.spotLocation}</td>
        <td>{spot?.name}</td>
        <td><Link to={`/update/${spot._id}`}><button  className="btn btn-primary">Update</button></Link></td>
        <td><button onClick={()=>handleDelete(spot._id)} className="btn btn-secondary">Delete</button></td>
      </tr>)
     }
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyList;