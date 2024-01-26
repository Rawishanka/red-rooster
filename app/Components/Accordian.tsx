import React, { useEffect } from "react";
import Image from "next/image";
import farm_image from "@/public/photo/img.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

const Accordian = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="gap-x-8 mt-10 lg:flex lg:flex-row">
        <div data-aos="fade-right" className="lg:px-14 flex justify-center basis-1/2">

    <div className="">
      <div className="mb-2.5">
        <span className=" text-green-500 text-2xl font-bold"> Our Services</span>
      </div>
      <div className="collapse collapse-plus bg-green-50 shadow-md">
        <input type="radio" name="my-accordion-3" defaultChecked={true} />
        <div className="text-slate-500 collapse-title text-xl font-medium">
          High quality vegetables and fruits
        </div>
        <div className="collapse-content">
          <p className="">
            Immerse yourself in the flavors of fresh, locally grown vegetables
            and fruits harvested straight from our farm. We cultivate a diverse
            selection of produce, ensuring that each item is bursting with
            nutrients and flavor. From vibrant, crisp vegetables to succulent,
            juicy fruits, our commitment to organic farming practices guarantees
            a wholesome and delicious experience with every bite.
          </p>
        </div>
      </div>
      <div className="mt-3 collapse collapse-plus bg-green-50 shadow-md">
        <input type="radio" name="my-accordion-3" />
        <div className="text-slate-500 collapse-title text-xl font-medium">
          Meat and milk products
        </div>
        <div className="collapse-content">
          <p>
            Indulge in the rich, savory goodness of our farm's meat and milk
            products. Our animals are raised with the utmost care, ensuring
            their health and happiness. From tender cuts of meat to creamy,
            wholesome milk products, our farm-to-table approach guarantees the
            highest quality and freshness. Savor the difference that comes from
            responsibly sourced and carefully processed meat and dairy, bringing
            the essence of our farm to your table.
          </p>
        </div>
      </div>
      <div className="mt-3 collapse collapse-plus bg-green-50 shadow-md">
        <input type="radio" name="my-accordion-3" />
        <div className="text-slate-500 collapse-title text-xl font-medium">
          Good quality animal based products
        </div>
        <div className="collapse-content">
          <p>
            Our farm takes pride in providing a range of exceptional
            animal-based products. From free-range eggs to premium honey and
            artisanal cheeses, we prioritize the well-being and natural living
            conditions of our animals. Our commitment to ethical and sustainable
            practices ensures that you receive the finest quality animal-based
            products, brought to you with care straight from our farm.
          </p>
        </div>
      </div>
    </div>
        </div>
        <div data-aos="fade-left" className="mt-5 lg:mt-0 flex basis-1/2 items-end  justify-center"><Image className=" drop-shadow-md rounded-2xl shadow-lg " src={farm_image} alt={"This is a farming Image"} height={550} width={550}/></div>
    </section>
  );
};

export default Accordian;
