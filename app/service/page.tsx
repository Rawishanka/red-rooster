import React from "react";
import Image from "next/image";
const Service = () => {
  return (
    <div>
      <div className="relative">
        <Image
          alt="service page"
          width={546}
          height={1500}
          layout="responsive"
          src={"/photo/new.png"}
        ></Image>
      </div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-5xl font-bold">
          Services of <br />
          RED ROOSTER FARM
        </h2>
        <br />
        <hr></hr>
        <span>
          Welcome to our farm, where we prioritize your satisfaction. Enjoy a
          variety of services, including top-notch Vegetables and Fruits, backed
          by a commitment to quality. Our Superb Customer Service ensures a
          seamless experience. 
        </span>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="card w-96 bg-green-900 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Organic Fruits & Vegetables</h2>
              <p>
                Discover the freshness of our Organic Fruits & Vegetables. Grown
                sustainably, our produce is a vibrant 
              </p>
              <div className="card-actions justify-end">
                <button className="btn">Go to Shop</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-green-900 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Good quality animal based products</h2>
              <p>
                Savor the excellence of our farm's animal-based products.
              </p>
              <div className="card-actions justify-end">
                <button className="btn">Go to Shop</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-green-900 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Cash on delivery</h2>
              <p>
                Discover convenience with our "Good Quality Cash on Delivery"
                service at the farm. 
              </p>
              <div className="card-actions justify-end">
                <button className="btn">Go to Shop</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-green-900 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Farm outlet purchasing</h2>
              <p>
                Discover freshness at its source with Farm Outlet Purchasing.
                Step into our rustic outlets, handpick the finest produce
              </p>
              <div className="card-actions justify-end">
                <button className="btn">Go to Shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
