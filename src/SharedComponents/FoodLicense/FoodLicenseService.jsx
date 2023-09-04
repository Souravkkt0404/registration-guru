import React from "react";
import food from "../../Assets/foodlicense.jpg";
import { Link } from "react-router-dom";

const FoodLicenseService = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-between flex-wrap">
        {/* image div */}
        <div className="w-full xl:w-1/4">
          <img
            src={food}
            alt="Food License Bangalore"
            className="w-full xl:w-64"
          />
        </div>
        <div className="w-full xl:w-3/4 flex flex-col justify-around">
          <h1 className="font-bold text-2xl">Food License Service</h1>
          <p>
            FSSAI stands for Food Safety and Standard Authority of India. It is
            a governmental body that prescribes the standards for selling,
            packaging, and storing food items in India. It is mandatory for
            every food business operator involved in the manufacturing, sale,
            packaging, storage, or distribution of food items to obtain an FSSAI
            License/Registration to run their food business. This includes all
            restaurants, cafes, hotels, e-commerce food businesses, food
            importers/exporters, and other such food business operators. FSSAI
            Registration/License is a 14-digit number, which is mandatorily
            labeled on the back of the product and comprises information about
            the producer's permit and assembling state. Such a license also
            serves as proof of the product's quality and safety, making it
            easier for customers to know that they are consuming safe food
            products.
          </p>
          <Link>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Button
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FoodLicenseService;
