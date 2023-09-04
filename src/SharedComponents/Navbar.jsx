import React, { useState, useEffect } from "react";
import Img from "../Assets/Logo.webp";
import { Link } from "react-router-dom";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import {serviceArea} from "../Data/AllDATA";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <nav className="w-full shadow-md bg--500">
        <div className="items-center justify-between mx-10 lg:max-w-full md:items-left md:flex md:px-24">
          <div className="flex items-center justify-between py-1 md:py-5 md:block">
            <Link to="/">
              <h2 className="text-2xl font-bold text-black">
                <img src={Img} alt="Logo" className="w-16 h-14" />
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <CgClose className="w-6 h-6 text-black" />
                ) : (
                  <CgMenuGridO className="w-8 text-black h-7" />
                )}
              </button>
            </div>
          </div>
          <div className={`md:block ${navbar ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-2 md:space-y-0">
              <li>
                <Link
                  to="/home"
                  className="block p-2 text-black font-bold no-underline hover:rounded-md hover:bg-gray-800 hover:text-white "
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li className="relative group">
                <div className="block p-2 text-black bg-white dropdown-container hover:rounded-md hover:bg-gray-800 hover:text-white font-bold">
                  Services
                  <div className="absolute left-0 z-50 invisible w-56 py-2 bg-white border border-2 border-gray-300 rounded shadow-lg top-10 group-hover:visible">
                    {serviceArea.map((items, index) => (
                      <div className="p-2 " key={index}>
                        <Link
                          to={items.link}
                          className="p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                          onClick={handleLinkClick}
                        >
                          {items.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="/Resources"
                  className="block p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                  onClick={handleLinkClick}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/PricingPlans"
                  className="block p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                  onClick={handleLinkClick}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/Blog"
                  className="block p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/Testimonial"
                  className="block p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                  onClick={handleLinkClick}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/Contactus"
                  className="block p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
