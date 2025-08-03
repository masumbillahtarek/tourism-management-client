import { Link, NavLink } from "react-router-dom";
import logo from '../assets/tourismLogo.png'
import '../App.css'
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
logOut()
.then(() => {
console.log('Sign-out successful.')
}).catch((error) => {
console.log(error)
});
    }
    const navLink=< >
<nav className=" flex flex-col md:flex-row gap-3 ">
        <NavLink className="md:border-2 rounded-lg px-1" to="/">Home</NavLink>
    <NavLink className="md:border-2 rounded-lg px-1" to="/allTouristsSpot">All Tourists Spot</NavLink>
   {!user&&<>
    <NavLink className="md:border-2 rounded-lg px-1" to="/login">Login</NavLink>
    <NavLink className="md:border-2 rounded-lg px-1" to="/register">Register</NavLink>
   </>}
    {
        user&&<>
        <NavLink className="md:border-2 rounded-lg px-1" to="/myList">My Lists</NavLink>
    <NavLink className="md:border-2 rounded-lg px-1" to="/addTouristsSpot">Add Tourists Spot </NavLink>
        </>
    }
</nav>
    </>
    return (
        
      <div className="navbar bg-[#6d686811] rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72  p-2 shadow text-xl ">
      {navLink}
      </ul>
    </div>
    <div className="hidden md:flex gap-2 items-center ">
        <img className="w-16" src={logo} alt="" />
        <a className=" font-bold ml-4 text-3xl ">TraveLux <br /> Adventures</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ml-48 text-lg">
   {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
    user?<><img title={user.displayName} className="w-12 h-12 rounded-full mr-4" src={user.photoURL} alt="" /> <button onClick={handleLogOut} className="btn btn-primary">Log Out</button></>: <Link to="/login"><a className="btn btn-primary">Login</a></Link>
    }
 
  </div>
</div>
    );
};

export default Navbar;