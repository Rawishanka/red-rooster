"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import apple from "@/public/Item/apple.png";
import egg from "@/public/Item/egg.png";
import lettuce from "@/public/Item/lettuce.png";
import onion from "@/public/Item/onions.png";
import carrot from "@/public/Item/carrot.png";
import pineapple from "@/public/Item/pineapple.png";
import pork from "@/public/Item/pork.png";
import potato from "@/public/Item/potato.png";
import icecream from "@/public/Item/icecream.png";
import butter from "@/public/Item/butter.png";
const listIm = [
  {
    id: 1,
    name: "Apple",
    description:
      "Apples are round or oval-shaped fruits with a crisp texture and a sweet or tart flavor",
    url: apple,
  },
  {
    id: 2,
    name: "Chicken Egg",
    description:
      "A chicken egg is nutrient-rich food product, the egg consists of a yolk and egg white (albumen)",
    url: egg,
  },
  {
    id: 3,
    name: "Lettuce",
    description:
      "Lettuce is a leafy green vegetable widely consumed for its crisp texture and mild flavor.",
    url: lettuce,
  },
  {
    id: 4,
    name: "Onions",
    description:
      "Onions are bulbous vegetables with distinct layers of skin, known for their pungent flavor and aroma.",
    url: onion,
  },
  {
    id: 5,
    name: "Carrot",
    description:
      "Carrots are root vegetables characterized by their vibrant orange color and sweet, crunchy taste.",
    url: carrot,
  },
  {
    id: 6,
    name: "Pineapple",
    description:
      "Pineapple is a tropical fruit with a distinctive appearance, featuring a spiky exterior and sweet",
    url: pineapple,
  },
  {
    id: 7,
    name: "Butter",
    description:
      "Butter is a dairy product made from churning cream, separating the fat from the liquid.",
    url:butter,
  },
];

const sliderSetting = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

const Popular = () => {
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
          <div className="cursor-pointer">
            <MdNavigateBefore className="text-4xl bg-green-50 rounded-lg  shadow-lg" />
          </div>
          <div className="cursor-pointer">
            <MdNavigateNext className="text-4xl bg-green-50 rounded-lg  shadow-lg" />
          </div>
        </div>
      </div>
      <Swiper
        {...sliderSetting}
        data-aos="fade-up"
        data-aos-offset="200"
        className="h-96 cursor-move"
      >
        {
          listIm.map(item=>{
            return(<SwiperSlide className="hover:opacity-75">
            <div className="bg-green-50  rounded-2xl shadow-lg pb-1.5 cursor-pointer">
              <Image
                src={item.url}
                alt={"first"}
                className="rounded-t-2xl hover:opacity-75"
              ></Image>
              <div className="mx-4">
                <span className="text-slate-500 text-xl font-medium ">{item.name}</span>
                <span className="mx-8">
                  <br />
                  {item.description}
                </span>
              </div>
            </div>
          </SwiperSlide>)
          })
        }
      </Swiper>
    </div>
  );
};
export default Popular;
