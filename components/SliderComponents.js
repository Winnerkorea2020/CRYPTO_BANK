"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderComponets = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href={`/`}>
            <div className="h-52 lg:h-80 w-full relative">
              <img
                src="https://images.unsplash.com/photo-1654514435003-29861a03f48d?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8aXdPblVhX3hJWEF8fGVufDB8fHx8fA%3D%3D&w=500"
                className="absolute top-0 left-0 h-full w-full object-center object-cover rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/`}>
            <div className="h-52 lg:h-80 w-full relative">
              <img
                src="https://images.unsplash.com/photo-1682695795557-17447f921f79?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670"
                className="absolute top-0 left-0 h-full w-full object-center object-cover rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/`}>
            <div className="h-52 lg:h-80 w-full relative">
              <img
                src="https://images.unsplash.com/photo-1555050455-f96634b5cba6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2304"
                className="absolute top-0 left-0 h-full w-full object-center object-cover rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/`}>
            <div className="h-52 lg:h-80 w-full relative">
              <img
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670"
                className="absolute top-0 left-0 h-full w-full object-center object-cover rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/`}>
            <div className="h-52 lg:h-80 w-full relative">
              <img
                src="https://images.unsplash.com/photo-1696392322523-37379e6808ca?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670"
                className="absolute top-0 left-0 h-full w-full object-center object-cover rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/`}>
            <div className="h-52 lg:h-80 w-full relative">
              <img
                src="https://images.unsplash.com/photo-1609533676226-50b4700b2c7d?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8aXdPblVhX3hJWEF8fGVufDB8fHx8fA%3D%3D&w=500"
                className="absolute top-0 left-0 h-full w-full object-center object-cover rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponets;
