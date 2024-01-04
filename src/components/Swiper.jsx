import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper"
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img className="resize refit" src="/img/img4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="resize refit" src="/img/img3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="resize refit" src="/img/img2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="resize refit" src="/img/img3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="resize refit" src="/img/img5.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
