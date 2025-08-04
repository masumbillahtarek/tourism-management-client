import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
    <footer className="flex flex-col lg:flex-row justify-around footer footer-center  bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4 text-xl">
    <a className="link link-hover">Destinations</a>
    <a className="link link-hover">Travel Guides</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-6">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
   <FaTwitter className="text-xl text-blue-600"></FaTwitter>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">
       <FaYoutube  className="text-xl text-red-600"/>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
   <FaFacebook  className="text-xl text-blue-600"/>
      </a>
    </div>
  </nav>
  <aside>
    <p className="text-xl">Copyright © {new Date().getFullYear()} - All rights reserved by TraveLux Adventures</p>
  </aside>
</footer>

    );
};

export default Footer;