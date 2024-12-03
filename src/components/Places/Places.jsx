import React from "react";
import Img1 from "../../assets/places/boat.jpg";

import { Link } from "react-router-dom";

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
              <p className="text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores adipisci vitae quos animi eius minus provident repellat,
                nam voluptas blanditiis facilis, ipsam aspernatur tempora est
                nobis voluptatem, placeat nesciunt nisi.
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="text-gray-500 text-sx font-light">
                  Rs 5600
                  <div className="text-red-500 line-through">Rs 7000</div>
                </div>
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
              <p className="text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores adipisci vitae quos animi eius minus provident repellat,
                nam voluptas blanditiis facilis, ipsam aspernatur tempora est
                nobis voluptatem, placeat nesciunt nisi.
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="text-gray-500 text-sx font-light">
                  Rs 5600
                  <div className="text-red-500 line-through">Rs 7000</div>
                </div>
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
              <p className="text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores adipisci vitae quos animi eius minus provident repellat,
                nam voluptas blanditiis facilis, ipsam aspernatur tempora est
                nobis voluptatem, placeat nesciunt nisi.
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="text-gray-500 text-sx font-light">
                  Rs 5600
                  <div className="text-red-500 line-through">Rs 7000</div>
                </div>
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
              <p className="text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores adipisci vitae quos animi eius minus provident repellat,
                nam voluptas blanditiis facilis, ipsam aspernatur tempora est
                nobis voluptatem, placeat nesciunt nisi.
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="text-gray-500 text-sx font-light">
                  Rs 5600
                  <div className="text-red-500 line-through">Rs 7000</div>
                </div>
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
              <p className="text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores adipisci vitae quos animi eius minus provident repellat,
                nam voluptas blanditiis facilis, ipsam aspernatur tempora est
                nobis voluptatem, placeat nesciunt nisi.
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="text-gray-500 text-sx font-light">
                  Rs 5600
                  <div className="text-red-500 line-through">Rs 7000</div>
                </div>
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
              <p className="text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores adipisci vitae quos animi eius minus provident repellat,
                nam voluptas blanditiis facilis, ipsam aspernatur tempora est
                nobis voluptatem, placeat nesciunt nisi.
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="text-gray-500 text-sx font-light">
                  Rs 5600
                  <div className="text-red-500 line-through">Rs 7000</div>
                </div>
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
              <p className="text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores adipisci vitae quos animi eius minus provident repellat,
                nam voluptas blanditiis facilis, ipsam aspernatur tempora est
                nobis voluptatem, placeat nesciunt nisi.
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="text-gray-500 text-sx font-light">
                  Rs 5600
                  <div className="text-red-500 line-through">Rs 7000</div>
                </div>
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
