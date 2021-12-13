
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"



// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Slider2() {
  const style = {

    style1 :  {
        backgroundImage: `url("/build.jpeg")` 
    },
    style2 :  {
      backgroundImage: `url("/build.jpeg")` 
    },
    style3 :  {
      backgroundImage: `url("/build.jpeg")` 
    }
        

  }
  
  
  return (
    <>
    <Swiper  
    className="mySwiper"
    modules={[Navigation, Pagination, Scrollbar]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
  <SwiperSlide style={style.style1}>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </>
  )
}