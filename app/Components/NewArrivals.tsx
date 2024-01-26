"use client"
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import aa from "@/public/photo/img.jpg"
import "swiper/css";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const sliderSetting = {

  slidesPerView :1,
  spaceBetween:50,
  breakpoints:{
      480:{
          slidesPerView:1
      },
      600:{
          slidesPerView:2
      },
      750:{
          slidesPerView:3
      },
      1100:{
          slidesPerView:4
      }
  }
  
}


const NewArrivals = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="mt-10 px-14">
      <div className="mb-4 flex justify-between">
      <span className="text-green-500 text-2xl font-bold">Popular Items</span>
      <div className="flex gap-x-3">
      <div className="cursor-pointer"><MdNavigateBefore className="text-4xl bg-green-50 rounded-lg  shadow-lg" /></div>
      <div className="cursor-pointer"><MdNavigateNext className="text-4xl bg-green-50 rounded-lg  shadow-lg"/></div>
      </div>
      </div>
      <Swiper  {...sliderSetting} data-aos="fade-up" data-aos-offset="200" className="h-96 cursor-move" >
      <SwiperSlide className="hover:opacity-75">
          <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
            <Image src="/itemPhotos/onions.png" width={950} height={950 }alt={""} className="rounded-t-2xl hover:opacity-75"></Image>
            <div className="mx-4">

            <span className="text-slate-500 text-xl font-medium ">Onions</span>
            <span className="mx-8"><br/>Onions are bulbous vegetables with distinct layers of skin, known for their pungent flavor and aroma.</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:opacity-75">
          <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
            <Image src="/itemPhotos/carrot.png" width={950} height={950 }alt={""} className="rounded-t-2xl hover:opacity-75"></Image>
            <div className="mx-4">

            <span className="text-slate-500 text-xl font-medium ">Carrot</span>
            <span className="mx-8"><br/>Carrots are root vegetables characterized by their vibrant orange color and sweet, crunchy taste.</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:opacity-75">
          <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
            <Image src="/itemPhotos/pineapple.png" width={950} height={950 }alt={""} className="rounded-t-2xl hover:opacity-75"></Image>
            <div className="mx-4">

            <span className="text-slate-500 text-xl font-medium ">Pineapple</span>
            <span className="mx-8"><br/>Pineapple is a tropical fruit with a distinctive appearance, featuring a spiky exterior and sweet</span>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="hover:opacity-75">
          <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
            <Image src="/itemPhotos/butter.png" width={950} height={950 }alt={""} className="rounded-t-2xl hover:opacity-75"></Image>
            <div className="mx-4">

            <span className="text-slate-500 text-xl font-medium ">Butter</span>
            <span className="mx-8"><br/>Butter is a dairy product made from churning cream, separating the fat from the liquid.</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:opacity-75">
          <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
            <Image src="/itemPhotos/apple.png" width={950} height={950 }alt={""} className="rounded-t-2xl hover:opacity-75"></Image>
            <div className="mx-4">

            <span className="text-slate-500 text-xl font-medium ">Apple</span>
            <span className="mx-8"><br/>Apples are round or oval-shaped fruits with a crisp texture and a sweet or tart flavor</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:opacity-75">
          <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
            <Image src="/itemPhotos/egg.png" width={950} height={950 }alt={""} className="rounded-t-2xl hover:opacity-75"></Image>
            <div className="mx-4">

            <span className="text-slate-500 text-xl font-medium ">Chicken Egg</span>
            <span className="mx-8"><br/>A chicken egg is nutrient-rich food product, the egg consists of a yolk and egg white (albumen).</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:opacity-75">
          <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
            <Image src="/itemPhotos/lettuce.png" width={950} height={950 }alt={""} className="rounded-t-2xl hover:opacity-75"></Image>
            <div className="mx-4">

            <span className="text-slate-500 text-xl font-medium ">Lettuce</span>
            <span className="mx-8"><br/>Lettuce is a leafy green vegetable widely consumed for its crisp texture and mild flavor. </span>
            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>

    </div>
  );
};
export default NewArrivals;
