"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperPc() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={(e) => console.log("slide change", e)}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full h-[90%] !items-center !justify-center bg-gray-200"
        >
          <SwiperSlide
            className="!flex !items-center !justify-center"
            style={{ background: "lightblue" }}
          >
            Slide 1
          </SwiperSlide>
          <SwiperSlide
            className="!flex !items-center !justify-center h-screen"
            style={{ background: "lightblue" }}
          >
            Slide 2
          </SwiperSlide>
          <SwiperSlide
            className="!flex !items-center !justify-center"
            style={{ background: "lightblue" }}
          >
            Slide 3
          </SwiperSlide>
          <SwiperSlide
            className="!flex !items-center !justify-center"
            style={{ background: "lightblue" }}
          >
            Slide 4
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
