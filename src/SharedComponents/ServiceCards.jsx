import React from "react";
import { serviceCardDetails } from "../Data/AllDATA";

const ServiceCards = () => {
  return (
    <div className="border border-b-gray-200">
    <div className="xl:container mx-auto my-6 flex flex-row flex-wrap justify-between">
      {serviceCardDetails.map((card) => (
        <div
          key={card.id}
          className="flex flex-row flex-wrap items-center justify-around xl:py-3 xl:px-6 sm:p3 gap-6 border border-custom  w-96 "
        >
          <div className="features-icon">
            <i className="mr-5 ml-4 p-3">
              <img src={card.icon} alt="" className="border p-3" />
            </i>
          </div>
          <div className="features-content">
            <p className="text-base text-zinc-500">{card.heading1}</p>
            <h3 className="mt-1 text-slate-800 text-3xl">{card.heading2}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ServiceCards;
