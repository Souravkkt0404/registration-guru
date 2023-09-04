import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img from "../Assets/bnr1.jpg";
import img2 from "../Assets/bnr2.jpg";
import img3 from "../Assets/bnr3.jpg";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      autoplay={{ delay: 5000 }} 
      slidesPerView={1} // Display one slide at a time for full width
      navigation
      pagination={{ clickable: true }}  
       
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="slider-item">
          <img src={img2} alt="Slide 1" style={{height:"90vh",width:'100vw'}}/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider-item">
          <img src={img} alt="Slide 2"  style={{height:"90vh",width:'100vw'}} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item">
          <img src={img3} alt="Slide 2"  style={{height:"90vh",width:'100vw'}} />
        </div>
      </SwiperSlide>
      
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default HeroSlider;
