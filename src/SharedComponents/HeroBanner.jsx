import React from "react";
import "../Styles/Service.css";
import { Link } from "react-router-dom";

function HeroBanner({ title, heading }) {
  return (
    <section className="relative">
      <div className="breadcumb-area mx-auto">
        <div className="text-center breadcumb-wrap">
          <h2>{heading}</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>{title}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
