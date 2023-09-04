import React from "react";

// router
import { Routes, Route } from "react-router-dom";

// MainPages
import LandingPage from "./MainPages/LandingPage.jsx";
import Home from "./MainPages/Home.jsx";
import RentalAgreement from "./ServicePages/RentalAgreement.jsx";
import FoodLicense from "./ServicePages/FoodLicense.jsx";
import GSTRegistration from "./ServicePages/GSTRegistration.jsx";
import MarriageRegistration from "./ServicePages/MarriageRegistration.jsx";

// components
import Navbar from "./SharedComponents/Navbar.jsx";
import Footer from "./SharedComponents/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rental-agreement" element={<RentalAgreement />} />
        <Route path="/food-license" element={<FoodLicense />} />
        <Route path="/gst-registration" element={<GSTRegistration />} />
        <Route
          path="/marriage-registration" element={<MarriageRegistration />}
        />
        {/* Add a 404 route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
