"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    id:"1",
    name: "Alexander Thompson",
    description: "Farm Manager",
    url: "/team/1.png",
  },
  {
    id:"2",
    name: "Benjamin Hayes",
    description: "Farm Sales Manager",
    url: "/team/2.png",
  },
  {
    id:"3",
    name: "Christopher Mitchell",
    description: "Farm worker",
    url: "/team/3.png",
  },
  {
    id:"4",
    name: "David Reynolds",
    description: "Order Delivering person",
    url: "/team/4.png",
  },
  {
    id:"5",
    name: "Edward Carter",
    description: "Financial handler",
    url: "/team/5.png",
  },
  {
    id:"6",
    name: "Victoria Turner",
    description: "Store room supervisor",
    url: "/team/6.png",
  },
];

const Team = () => {

  return (
    <div>
      <div className="relative">
        <div className="flex justify-center">
          <Image
            src={"/photo/team.png"}
            width={546}
            className="blur-sm"
            height={1500}
            layout="responsive"
            alt={""}
          ></Image>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-5xl font-bold">Our Team RED ROOSTER FARM</h2>
          <p className="text-lg">
            At RedRooster Farm, our vision is rooted in nourishing communities
            by providing access to wholesome, nutritious farm-based products. We
            believe in the power of nature to deliver health and well-being
            through the bounty of our farm.
          </p>
        </div>
      </div>
      <>
      <hr></hr>
      </>
      <div  className="grid grid-cols-3 gap-10 px-20 mt-10">
        {team.map((item, index) => {
          return (
            <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={item.url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="card-actions">
                  <button className="btn btn-success">Contact</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
