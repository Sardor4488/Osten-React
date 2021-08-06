import React, { Component, useEffect, useRef, useState } from "react";
import "./elavator.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
 
SwiperCore.use([Pagination]);

export default class Elavator extends Component {
  render() {
    return (
      <div className="">
        <div className="py-5">
          <h1 className="text-center   pt-5 ">Кабины лифтов</h1>
          <div className="hr"></div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            
             <SwiperSlide><img className="h-100 w-100" src= "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="" /> <h5 className="ostenImg my-4">OSTEN13</h5></SwiperSlide>
            <SwiperSlide><img className="h-100 w-100" src= "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="" /><h5 className="ostenImg my-4">OSTEN13</h5></SwiperSlide>
            <SwiperSlide><img className="h-100 w-100" src= "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="" /><h5 className="ostenImg my-4">OSTEN13</h5></SwiperSlide>
            <SwiperSlide><img className="h-100 w-100" src= "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="" /><h5 className="ostenImg my-4">OSTEN13</h5></SwiperSlide>
            <SwiperSlide><img className="h-100 w-100" src= "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="" /><h5 className="ostenImg my-4">OSTEN13</h5></SwiperSlide>
            <SwiperSlide><img className="h-100 w-100" src= "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="" /><h5 className="ostenImg my-4">OSTEN13</h5></SwiperSlide>
            <SwiperSlide><img className="h-100 w-100" src= "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="" /><h5 className="ostenImg my-4">OSTEN13</h5></SwiperSlide>

          </Swiper>
        </div>
      </div>
    );
  }
}
