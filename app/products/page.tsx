"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
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
import banana from "@/public/Item/banana.png"
import beef from "@/public/Item/beef.png"
import cheese from "@/public/Item/cheese.png"
import chicken from "@/public/Item/chicken.png"
import curd from "@/public/Item/curd.png"
import leeks from "@/public/Item/leeks.png"
import mango from "@/public/Item/mango.png"
import milk from "@/public/Item/milk.png"
import orange from "@/public/Item/orange.png"
import strawberry from "@/public/Item/strawberry.png"
import tomato from "@/public/Item/tomato.png"
import beens from "@/public/Item/beens.png"
const products = [
  { id: 1, name: "Apple", url: apple, price: "Rs. 45.00" },
  { id: 2, name: "Banana", url: banana, price: "Rs. 45.00" },
  { id: 3, name: "Beef", url: beef, price: "Rs. 45.00" },
  { id: 4, name: "Beans", url:beens, price: "Rs. 45.00" },
  { id: 5, name: "Butter", url:butter, price: "Rs. 45.00" },
  { id: 6, name: "Carrot", url: carrot, price: "Rs. 45.00" },
  { id: 7, name: "Cheese", url: cheese, price: "Rs. 45.00" },
  { id: 8, name: "Chicken", url:chicken, price: "Rs. 45.00" },
  { id: 9, name: "Curd", url: curd, price: "Rs. 45.00" },
  { id: 10, name: "Eggs", url: egg, price: "Rs. 45.00" },
  { id: 11, name: "Ice-Cream", url: icecream, price: "Rs. 45.00" },
  { id: 12, name: "Leeks", url: leeks, price: "Rs. 45.00" },
  { id: 13, name: "Lettuce", url: lettuce, price: "Rs. 45.00" },
  { id: 14, name: "Mango", url: mango, price: "Rs. 45.00" },
  { id: 15, name: "Milk", url: milk, price: "Rs. 45.00" },
  { id: 16, name: "Oninons", url: onion, price: "Rs. 45.00" },
  { id: 17, name: "Orange", url: orange, price: "Rs. 45.00" },
  { id: 18, name: "Pineapple", url: pineapple, price: "Rs. 45.00" },
  { id: 19, name: "Pork", url: pork, price: "Rs. 45.00" },
  { id: 20, name: "Potato", url: potato, price: "Rs. 45.00" },
  { id: 21, name: "Strawberry", url: strawberry, price: "Rs. 45.00" },
  { id: 22, name: "Tomato", url: tomato, price: "Rs. 45.00" },

];
const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 px-20 mt-10">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              data-aos="zoom-in-up"
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <Image src={item.url} alt="" className="rounded-xl"></Image>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.price}</p>
                <div className="card-actions">
                  <button className="btn btn-success">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
