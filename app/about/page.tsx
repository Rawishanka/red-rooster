import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className="relative">
      <Image
        src="/photo/about.png"
        alt="about us page"
        width={546}
        height={1500}
        layout="responsive"
        className="blur-sm"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-3xl font-bold">About our RED ROOSTER FARM</h2>
        <p className="text-lg">At RedRooster Farm, our vision is rooted in nourishing communities by providing access to wholesome, nutritious farm-based products. We believe in the power of nature to deliver health and well-being through the bounty of our farm.</p>
        <br/>
        <span>Driven by the passion to cultivate a healthier lifestyle, our mission at RedRooster is to expand the availability of farm-fresh products. We are dedicated to fostering a connection between consumers and the source of their food, promoting sustainability, and supporting local agriculture.</span>
        <br/>
        <span>100% Organic: Our commitment to organic farming practices ensures that every product from RedRooster is free from synthetic pesticides and chemicals, offering you pure, unadulterated goodness.
Award-Winning: Recognized for excellence in farming and sustainability, RedRooster has garnered awards for our dedication to providing top-quality organic products.
Experience: With a farming legacy spanning three years, we bring a wealth of experience and expertise to every harvest, ensuring the highest standards of quality and freshness.</span>
      </div>
    </div>
  )
}

export default About