"use client"
import Accordian from "./Components/Accordian";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NewArriaval from "./Components/NewArrivals";
import Popular from "./Components/Popular";
import Welcome from "./Components/Welcome";
import Stat from "./Components/stat";


export default function Home() {
  
  return (
    <main className=" px-20">
      <Hero/>
      <Welcome/>
      <Stat/>
      <Popular/>
      <Accordian/>
      <NewArriaval/>
    </main>
  );
}
