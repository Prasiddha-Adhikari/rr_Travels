import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import { Link } from "react-router-dom";

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
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    originalprice: 6200,
    discountedprice: 5000,
    type: "Cultural Relax",
    discount: 81,
    featured: true,
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    originalprice: 6200,
    discountedprice: 5000,
    discount: 81,
    time: 3,
    type: "Cultural Relax",
  },
];

const Places = ({ featured }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-200 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="pl-2 text-3xl font-medium">Our best promotion tour</h1>
        <p className="pl-2 mb-4">Most popular destination</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Img1}
                alt="las vegas"
                className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/detail">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </Link>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Las Vagas</h2>
              <p className="text-sm text-gray-600">USA</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-red-500 text-xl font-bold">Rs 5600</div>
                <div className="text-gray-500 line-through">Rs 7000</div>
              </div>
              <div className="text-white bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">
                -80%
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Img1}
                alt="las vegas"
                className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/detail">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </Link>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Las Vagas</h2>
              <p className="text-sm text-gray-600">USA</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-red-500 text-xl font-bold">Rs 5600</div>
                <div className="text-gray-500 line-through">Rs 7000</div>
              </div>
              <div className="text-white bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">
                -80%
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Img1}
                alt="las vegas"
                className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/detail">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </Link>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Las Vagas</h2>
              <p className="text-sm text-gray-600">USA</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-red-500 text-xl font-bold">Rs 5600</div>
                <div className="text-gray-500 line-through">Rs 7000</div>
              </div>
              <div className="text-white bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">
                -80%
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Img1}
                alt="las vegas"
                className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/detail">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </Link>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Las Vagas</h2>
              <p className="text-sm text-gray-600">USA</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-red-500 text-xl font-bold">Rs 5600</div>
                <div className="text-gray-500 line-through">Rs 7000</div>
              </div>
              <div className="text-white bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">
                -80%
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Img1}
                alt="las vegas"
                className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/detail">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </Link>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Las Vagas</h2>
              <p className="text-sm text-gray-600">USA</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-red-500 text-xl font-bold">Rs 5600</div>
                <div className="text-gray-500 line-through">Rs 7000</div>
              </div>
              <div className="text-white bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">
                -80%
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Img1}
                alt="las vegas"
                className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/detail">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </Link>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            </div>
            <div className="p-4 font-poppins">
              <h2 className="text-lg font-bold mb-2">Las Vagas</h2>
              <p className="text-sm text-gray-600">USA</p>
              <div className="flex font-poppins items-center justify-between mt-4">
                <div className="text-red-500 text-xl font-bold">Rs 5600</div>
                <div className="text-gray-500 line-through">Rs 7000</div>
              </div>
              <div className="text-white font-poppins bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">
                -80%
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Img1}
                alt="las vegas"
                className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex font-poppins items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/detail">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </Link>
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Las Vagas</h2>
              <p className="text-sm text-gray-600">USA</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-red-500 text-xl font-bold">Rs 5600</div>
                <div className="text-gray-500 line-through">Rs 7000</div>
              </div>
              <div className="text-white bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">
                -80%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Places;
