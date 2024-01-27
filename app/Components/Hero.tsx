"use client"
import React from "react";
import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import first from "@/public/photo/first.png";
import second from "@/public/photo/second.png";
import third from "@/public/photo/third.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    first,
    second,
    third
   
  ];

  const totalItems = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // Change 3000 to the desired interval in milliseconds (3 seconds in this example)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex, totalItems]);

  const handleItemClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <div className="mt-3 drop-shadow-md rounded-t-2xl shadow-lg carousel w-full">
        {images.map((src, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className={`carousel-item  w-full ${
              index === currentIndex ? "visible" : "hidden"
            }`}
          >
            <Image
              className="w-full transition ease-in-out delay-150"
              alt={`Carousel Item ${index + 1}`}
               src={src}            />
          </div>
        ))}
        <div className="flex justify-center  w-full py-2 gap-2">
          {images.map((_, index) => (
            <a
              key={index}
              href={`#item${index + 1}`}
              className={`btn btn-xs ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
