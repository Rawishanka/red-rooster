"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const products = [
  { id: 1, name: "Apple", url: "/item/apple.png", price: "Rs. 45.00" },
  { id: 2, name: "Banana", url: "/item/banana.png", price: "Rs. 45.00" },
  { id: 3, name: "Beef", url: "/item/beef.png", price: "Rs. 45.00" },
  { id: 4, name: "Beans", url: "/item/beens.png", price: "Rs. 45.00" },
  { id: 5, name: "Butter", url: "/item/butter.png", price: "Rs. 45.00" },
  { id: 6, name: "Carrot", url: "/item/carrot.png", price: "Rs. 45.00" },
  { id: 7, name: "Cheese", url: "/item/cheese.png", price: "Rs. 45.00" },
  { id: 8, name: "Chicken", url: "/item/chicken.png", price: "Rs. 45.00" },
  { id: 9, name: "Curd", url: "/item/curd.png", price: "Rs. 45.00" },
  { id: 10, name: "Eggs", url: "/item/egg.png", price: "Rs. 45.00" },
  { id: 11, name: "Ice-Cream", url: "/item/icecream.png", price: "Rs. 45.00" },
  { id: 12, name: "Leeks", url: "/item/leeks.png", price: "Rs. 45.00" },
  { id: 13, name: "Lettuce", url: "/item/lettuce.png", price: "Rs. 45.00" },
  { id: 14, name: "Mango", url: "/item/mango.png", price: "Rs. 45.00" },
  { id: 15, name: "Milk", url: "/item/milk.png", price: "Rs. 45.00" },
  { id: 16, name: "Oninons", url: "/item/onions.png", price: "Rs. 45.00" },
  { id: 17, name: "Orange", url: "/item/orange.png", price: "Rs. 45.00" },
  { id: 18, name: "Pineapple", url: "/item/pineapple.png", price: "Rs. 45.00" },
  { id: 19, name: "Pork", url: "/item/pork.png", price: "Rs. 45.00" },
  { id: 20, name: "Potato", url: "/item/potato.png", price: "Rs. 45.00" },
  { id: 21, name: "Strawberry", url: "/item/strawberry.png", price: "Rs. 45.00" },
  { id: 22, name: "Tomato", url: "/item/tomato.png", price: "Rs. 45.00" },

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
                <img src={item.url} alt="Shoes" className="rounded-xl" />
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
