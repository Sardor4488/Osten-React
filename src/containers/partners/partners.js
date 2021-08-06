import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./partners.css"; 
import SwiperCore, { Pagination } from "swiper/core";
  SwiperCore.use([Pagination]);




  
export default function Partners() {
  return (
    <div className='py-5'>
    <h1 className="text-center   pt-5 ">Производство</h1>
        <div className=" hrr bg-dark ">
          {" "}
          <hr className="mb-5" />
        </div>
      <Swiper 
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
          
        <SwiperSlide><img src="https://osten.vercel.app/images/index/partner1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://osten.vercel.app/images/index/partner3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://osten.vercel.app/images/index/partner4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://osten.vercel.app/images/index/partner5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://osten.vercel.app/images/index/partner6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://osten.vercel.app/images/index/partner7.png" alt="" /></SwiperSlide>
     
      </Swiper>
    </div>
  );
}
