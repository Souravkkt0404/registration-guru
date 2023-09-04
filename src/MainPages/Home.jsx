import React from "react";
import HomeCarousel from "../SharedComponents/HomeCarousel";
import ServiceCards from "../SharedComponents/ServiceCards";
import AboutBox from "../SharedComponents/AboutBox";
import SliderT from "../SharedComponents/Slider";

const Home = () => {
  return (
    <>
      {/* <HomeCarousel/> */}
      <SliderT/>
      <ServiceCards/>      
      <AboutBox/>
    </>
  );
};

export default Home;
