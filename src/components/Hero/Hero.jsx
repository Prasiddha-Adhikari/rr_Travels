import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import HotelNavBar from "../Navbar/HotelNavBar";
import HomeNavBar from "../Navbar/HomeNavBar";

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState("hotel");

  return (
    <div className="h-screen bg-cover bg-center font-poppins">
      <div className="flex flex-col text-white container py-20">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold">
          Love where you're going
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Book Incredible Destinations Around the World
        </p>
      </div>
      <div className="container">
          <div className="flex pl-1">
            <button
              className={`px-4 py-2 focus:outline-none ${
                selectedOption === "hotel"
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedOption("hotel")}
              >
              Hotel
            </button>
            <button
              className={`px-4 py-2  focus:outline-none ${
                selectedOption === "tour"
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedOption("tour")}
              >
              Tour
            </button>
          </div>       
            {selectedOption === "hotel" ? (
              <>
                <HotelNavBar />
              </>
            ) : (
              <>
                <HomeNavBar />
              </>
            )}
        </div>
      </div>
  );
};

export default Hero;
