import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.webp";
import "../Styles/Footer.css";
import { FaArrowRight } from "react-icons/fa";
import {serviceArea} from "../Data/AllDATA";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black">
      <div className="container flex flex-wrap mx-auto">
        <div className="w-full px-4 mb-4 md:w-1/4">
          <h3 className="mb-4 text-2xl font-semibold">
            <Link to="/">
              <img src={logo} alt="Registration Guru" className="w-16 h-14" />
            </Link>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </h3>
        </div>

        <div className="w-full px-4 mb-4 md:w-1/4">
          <h3 className="mb-4 text-2xl font-semibold">Quick Links</h3>
          <div className="footer-link">
            <ul>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Rental Agreement
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Food License
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Resources
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Our Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Our Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full px-4 mb-4 md:w-1/4">
          <h3 className="mb-4 text-2xl font-semibold">Practice Area</h3>
          <div className="footer-link">
            <ul>
              {serviceArea.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="flex items-center mr-1">
                    <FaArrowRight size={10} />
                    &nbsp;{item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full px-4 mb-4 md:w-1/4">
          <h3 className="mb-4 text-2xl font-semibold">Get In Touch</h3>
          <div className="footer-link">
            <ul>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Rental Agreement
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Food License
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Resources
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Our Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center mr-1">
                  <FaArrowRight size={10} />
                  &nbsp;Our Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
