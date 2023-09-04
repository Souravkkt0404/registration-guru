import React from "react";
import img from "../Assets/aboutBox.jpg";
import { Link } from "react-router-dom";

const AboutBox = () => {
  return (
    <div className="border border-b-gray-200">
      <div class="container mx-auto my-24">
        <div class="flex flex-row gap-0 flex-wrap">
          <div className="w-80 ">
            <img
              src={img}
              alt="Food License Bangalore"
              className="w-72 border border-custom p-2"
            />
          </div>

          <div className="w-3/4 flex flex-col justify-around section-title">
            <h1 className="font-bold text-2xl">About Registration Guru</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis iste doloremque corporis accusantium impedit animi quod
              incidunt voluptatum eos! Voluptas veniam suscipit amet praesentium
              eveniet dignissimos facere modi enim consequuntur! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Blanditiis iste
              doloremque corporis accusantium impedit animi quod incidunt
              voluptatum eos! Voluptas veniam suscipit amet praesentium eveniet
              dignissimos facere modi enim consequuntur! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Blanditiis iste doloremque
              corporis accusantium impedit animi quod incidunt voluptatum eos!
              Voluptas veniam suscipit amet praesentium eveniet dignissimos
              facere modi enim consequuntur!
            </p>
            <Link>
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Button
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
