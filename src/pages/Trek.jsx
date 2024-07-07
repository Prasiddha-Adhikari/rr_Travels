import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/trek_banner.jpg";
import ban from "../assets/about.jpg";
import Img1 from "../assets/places/boat.jpg";
import Img2 from "../assets/places/tajmahal.jpg";
import Img3 from "../assets/places/water.jpg";
import Img4 from "../assets/places/place4.jpg";
import PlaceCard from "../components/Places/PlaceCard";
import ban2 from "../assets/trek-banner-2.png";
import ban3 from "../assets/banner-event-3.jpg";
import ban4 from "../assets/box-tour-3.png";
import ban5 from "../assets/call-to-action-bg-3.png";
import TrekSlick from "../components/slick/TrekSlick";
import TrekSlide from "../components/slick/TrekSlide";
import HomeNavBar from "../components/Navbar/HomeNavBar";

const Trek = ({ }) => {

  const PlacesData = [
    {
      img: Img1,
      title: "Boat",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      originalprice: 6200,
      discountedprice: 5000,
      discount: 81,
      type: "Cultural Relax",
      featured: true,
    },
    {
      img: Img2,
      title: "Taj Mahal",
      location: "India",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      originalprice: 6200,
      discountedprice: 5000,
      discount: 81,
      type: "Cultural Relax",
      featured: true,
    },
    {
      img: Img3,
      title: "Underwater",
      location: "US",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      originalprice: 6200,
      discountedprice: 5000,
      discount: 81,

      type: "Cultural Relax",
    },
    {
      img: Img4,
      title: "Sydney",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      originalprice: 6200,
      discountedprice: 5000,
      discount: 81,

      type: "Cultural Relax",
    },
  ];

 
  return (
    <div className="font-poppins">
      <img
        src={banner}
        alt=""
        className="absolute w-full h-[450px] object-cover "
      />
      <div className="relative h-[80vh] bg-cover bg-center">
        <div className="flex flex-col text-white justify-center items-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            Love where you're going
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            Book Incredible Destinations Around the World
          </p>
          <div className="pt-7">
          <HomeNavBar />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 self-center md:flex-col">
          <div>
            <p className="text-2xl">Go to Venice</p>
            <p className="">
              {" "}
              It is a long established fact that a reader will be distracted by
              the readable content of a page ...
            </p>
          </div>
          <div className="container col-span-2">
            <TrekSlide />
          </div>
        </div>
        {/* image */}
        <section className="pt-10">
          <div className="flex">
            <img
              src={ban}
              alt="about"
              className="w-[100%] h-44 bg-left object-cover"
            />
            <div className="absolute bg-opacity-40 grid grid-cols-2 text-center items-center w-full justify-center text-white py-12">
              <div className="pr-60">
                <p className="text-7xl md:text-2xl font-bold ">
                  Sale up for new year
                </p>
                <p>curabitur blandit tempus</p>
              </div>
              <div>
                <button className="bg-white text-black rounded p-3">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="pt-10">
            <h1 className="text-3xl">Popular tour in the month</h1>
            <p className="text-sm text-gray-400">
              Local Experience You'll Love
            </p>
          </div>
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
      {/*   */}
      <section>
        <div className="pt-5">
          <img src={ban2} alt="" className="absolute h-[450px] object-cover" />
          <div className="container inset-0 relative h-[70vh] bg-cover bg-center">
            <div className="flex flex-col text-white  py-20">
              <h1 className="text-4xl md:text-6xl font-bold">
                Enjoy your holiday
              </h1>
              <p className="text-lg md:text-2xl">
                Curabitur blandit tempus porttitor
              </p>
            </div>
            <button className="bg-white text-black rounded p-2 ">
              Explore
            </button>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="container grid grid-cols-3">
          <div>
            <img src={ban3} alt="" className="px-2 pt-4" />
            <div className="container">
              <p className="font-bold text-xl">1000+ local guides</p>
              <p className="text-sm text-gray-500">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
          </div>
          <div className="py-8 px-16">
            <p className="font-bold text-xl">Handcrafted experience</p>
            <p className="text-sm text-gray-500">
              Morbi semper fames lobortis ac hac penatibus
            </p>
          </div>
          <div className="py-8 px-16">
            <p className="font-bold text-xl">96% happt travels</p>
            <p className="text-sm text-gray-500">
              Morbi semper fames lobortis ac hac penatibus
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="container pt-10">
          <h1 className="text-3xl">Top activity</h1>
          <p className="text-sm text-gray-400">
            One way to vertically center is to use my-auto
          </p>
        </div>
        <div className="p-4  transition-all duration-500">
          <div className="container grid grid-cols-4 pt-4 gap-4">
            <div className="relative w-full h-full overflow-hidden group">
              <div className="w-full h-full transition-transform duration-300 transform group-hover:scale-125">
                <img src={ban4} className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Hello</span>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden group">
              <div className="w-full h-full transition-transform duration-300 transform group-hover:scale-125">
                <img src={ban4} className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Hello</span>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden group">
              <div className="w-full h-full transition-transform duration-300 transform group-hover:scale-125">
                <img src={ban4} className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Hello</span>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden group">
              <div className="w-full h-full transition-transform duration-300 transform group-hover:scale-125">
                <img src={ban4} className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Hello</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* image */}
      <section>
        <div className="grid grid-cols-2">
          <div>
            <img src={ban5} alt="" className="h-[400px]" />
          </div>
          <TrekSlick />
        </div>
      </section>
    </div>
  );
};
export default Trek;
