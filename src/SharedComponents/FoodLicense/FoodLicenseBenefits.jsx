import React from "react";
import { BenefitsOfFoodLicense } from "../../Data/AllDATA";

const FoodLicenseBenefits = () => {
  return (
    <div>
      <h3 className="m-4 text-lg font-semibold ">
        Benefits FSSAI License in Karnataka
      </h3>
      <ul className="p-4 list-disc list-inside">
        {BenefitsOfFoodLicense.map((benefit, index) => (
          <li key={index}>{benefit.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodLicenseBenefits;
