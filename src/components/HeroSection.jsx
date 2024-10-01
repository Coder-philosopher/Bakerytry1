import React, { useState, useEffect } from "react";
import pastry1 from "./images/pastry1.jpg";
import pastry2 from "./images/pastry2.jpg";
import pastry3 from "./images/pastry3.jpg";
import pastry31 from "./images/pastry4.jpg";
import pastry5 from "./images/pastry5.jpg";
import pastry6 from "./images/pastry6.jpg";

const slides = [
  { image: pastry1, price: "$10", name: "Delicious Breads" },
  { image: pastry2, price: "$25", name: "Fantabulous Cookies!!" },
  { image: pastry3, price: "$50", name: "French Croissants..." },
  { image: pastry31, price: "$10", name: "Sugary Donuts" },
  { image: pastry5, price: "$25", name: "Delicious Pastries" },
  { image: pastry6, price: "$20", name: "Cakes..." },
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center py-20 font-poppins">
      {/* Added padding of 10px and background color */}
      <div className="relative h-[500px] w-[900px] overflow-hidden rounded-lg hover:cursor-pointer bg-[#f8f8f8] shadow-lg p-2">
        {/* Background Layer with extra padding */}
        <div className="absolute inset-0 bg-[#f4c542] opacity-30 rounded-lg"></div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="object-cover w-full h-full rounded-lg overflow-hidden"
            />
            <div className="absolute inset-0 bg-black border-2 border-solid border-[#d8cece] bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold">{slide.name}</h1>
              <p className="text-2xl mt-2">{slide.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
