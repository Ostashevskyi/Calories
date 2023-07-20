"use client";
import React from "react";

import { Playfair_Display } from "next/font/google";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import cardInfo from "./cardInfo";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const Cards = () => {
  return (
    <section className="pb-16">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        cla
      >
        {cardInfo.map((card) => {
          return (
            <SwiperSlide key={card.id} className={playfair_display}>
              <div className="max-w-[90%] border border-slate-200 rounded-md ml-6 h-[250px] shadow-lg font-serif">
                <div className="flex mt-2 items-center ml-4 mb-4">
                  <div className="w-[32px] h-[32px] rounded-full bg-yellow-300 w-8 flex items-center justify-center text-slate-700">
                    {card.id}
                  </div>
                  <h3 className="mx-4">{card.title}</h3>
                </div>
                <p className="mx-4 text-center text-slate-600">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Cards;
