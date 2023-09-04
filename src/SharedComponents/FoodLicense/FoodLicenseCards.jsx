import React from "react";
import {LicenseCards } from "../../Data/AllDATA";

const FoodLicenseCards = () => {
  return (
    <>
      <div className="mt-20 items-center">
        <h1 className="text-center font-bold text-2xl mb-10">
          Types of Food License{" "}
        </h1>

        <div className="flex flex-row flex-wrap justify-between ">
          {LicenseCards.map((items, index) => (
            <div
              class="max-w-sm rounded overflow-hidden shadow-lg "
              key={index}
            >
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{items.heading}</div>
                <p class="text-gray-700 text-base">{items.desc}</p>
              </div>
              <div class="px-6 py-4">
                <p>{items.time1}</p>
                <p>{items.comingText}</p>
              </div>

              {/*booking buuton  */}
              <div className="flex justify-center my-5">
                <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded-md hover:bg-green-700">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodLicenseCards;
