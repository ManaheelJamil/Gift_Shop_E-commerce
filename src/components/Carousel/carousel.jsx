"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";


  const productImages = [
    "/assets/jewelary.webp",
    "/assets/decorater.webp",
    "/assets/headphone.webp",
    "/assets/gift.webp",
  ];
const ImageSlider = ({ images }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="rounded-2xl shadow-lg"
      >
        {productImages.map((img,index) => (
          <SwiperSlide key={images}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="mt-4">
        <Swiper
          modules={[Thumbs]}
          slidesPerView={4}
          spaceBetween={10}
          className="cursor-pointer"
        >
          {productImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`thumb-${index}`}
                className="w-full h-20 object-cover rounded-xl border border-gray-300 hover:border-blue-500 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
