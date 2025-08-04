
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import logo from '../assets/tourismLogo.png'
import Footer from '../shared/Footer';
const Root = () => {
    return (
    <div>
            <div className='mx-24 my-12'> 
            <div className="flex gap-2 items-center md:hidden my-6 ">
                <img className="w-16" src={logo} alt="" />
                <a className="font-bold text-3xl ml-4">TraveLux <br /> Adventures</a>
            </div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Root;