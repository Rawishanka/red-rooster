"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const products = [
  { id: 1, name: "Apple", url: "/itemPhotos/apple.png", price: "Rs. 45.00" },
  { id: 2, name: "Banana", url: "/itemPhotos/banana.png", price: "Rs. 45.00" },
  { id: 3, name: "Beef", url: "/itemPhotos/beef.png", price: "Rs. 45.00" },
  { id: 4, name: "Beans", url: "/itemPhotos/beens.png", price: "Rs. 45.00" },
  { id: 5, name: "Butter", url: "/itemPhotos/butter.png", price: "Rs. 45.00" },
  { id: 6, name: "Carrot", url: "/itemPhotos/carrot.png", price: "Rs. 45.00" },
  { id: 7, name: "Cheese", url: "/itemPhotos/cheese.png", price: "Rs. 45.00" },
  { id: 8, name: "Chicken", url: "/itemPhotos/chicken.png", price: "Rs. 45.00" },
  { id: 9, name: "Curd", url: "/itemPhotos/curd.png", price: "Rs. 45.00" },
  { id: 10, name: "Eggs", url: "/itemPhotos/egg.png", price: "Rs. 45.00" },
  { id: 11, name: "Ice-Cream", url: "/itemPhotos/icecream.png", price: "Rs. 45.00" },
  { id: 12, name: "Leeks", url: "/itemPhotos/leeks.png", price: "Rs. 45.00" },
  { id: 13, name: "Lettuce", url: "/itemPhotos/lettuce.png", price: "Rs. 45.00" },
  { id: 14, name: "Mango", url: "/itemPhotos/mango.png", price: "Rs. 45.00" },
  { id: 15, name: "Milk", url: "/itemPhotos/milk.png", price: "Rs. 45.00" },
  { id: 16, name: "Oninons", url: "/itemPhotos/onions.png", price: "Rs. 45.00" },
  { id: 17, name: "Orange", url: "/itemPhotos/orange.png", price: "Rs. 45.00" },
  { id: 18, name: "Pineapple", url: "/itemPhotos/pineapple.png", price: "Rs. 45.00" },
  { id: 19, name: "Pork", url: "/itemPhotos/pork.png", price: "Rs. 45.00" },
  { id: 20, name: "Potato", url: "/itemPhotos/potato.png", price: "Rs. 45.00" },
  { id: 21, name: "Strawberry", url: "/itemPhotos/strawberry.png", price: "Rs. 45.00" },
  { id: 22, name: "Tomato", url: "/itemPhotos/tomato.png", price: "Rs. 45.00" },

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
