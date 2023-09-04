import React from "react";
import HeroBanner from "../SharedComponents/HeroBanner";

//components
import FoodLicenseBenefits from "../SharedComponents/FoodLicense/FoodLicenseBenefits";
import FoodLicenseCards from "../SharedComponents/FoodLicense/FoodLicenseCards";
import FoodLicenseService from "../SharedComponents/FoodLicense/FoodLicenseService";

const FoodLicense = () => {
  return (
    <>
      <section>
        <HeroBanner title="Our Services" heading="Our Practice Area" />
      </section>

      <section>
        <div className="container mx-auto my-6">
          <div className="w-auto">
            {/* food license Divition */}
            <FoodLicenseService />

            <div className="w-auto mt-20">
              <FoodLicenseBenefits />
            </div>

            {/* license cards */}
            <FoodLicenseCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodLicense;
