import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import left from '../../assets/svg/left-arrow.svg'

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  cursor: "pointer",
  top: "-40px",
  left: "1000px"
};
const buttonStyle1 = {
  width: "30px",
  background: "none",
  border: "0px",
  transform: 'rotate(180deg)',
  top : "-40px",
  right : "50px"
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <img src={left} alt="" />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle1 }}>
      <img src={left} alt="" />
    </button>
  ),
};

const Trending = (featured) => {
  return (
    <div>
      <div>
        <p className="text-4xl">Trending Tours</p>
      </div>
      <div className="pt-10">
        <Slide
          slidesToScroll={1}
          slidesToShow={4}
          indicators={true}
          {...properties}
        >
          <div>
            <div className="h-full pr-10">
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="relative bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={Img1}
                      alt="boat"
                      className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Boat</h2>
                    <p className="text-sm text-gray-600">USA</p>
                    <div className="flex items-center justify-end mt-4">
                      <div className="text-gray-500 text-xl font-bold">
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
            </div>
          </div>
          <div>
          <div className="h-full pr-10">
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="relative bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={Img2}
                      alt="boat"
                      className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Boat</h2>
                    <p className="text-sm text-gray-600">USA</p>
                    <div className="flex items-center justify-end mt-4">
                    <div className="text-gray-500 text-xl font-bold">
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
            </div>
          </div>
          <div>
          <div className="h-full pr-10">
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="relative bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={Img3}
                      alt="boat"
                      className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Boat</h2>
                    <p className="text-sm text-gray-600">USA</p>
                    <div className="flex items-center justify-end mt-4">
                    <div className="text-gray-500 text-xl font-bold">
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
            </div>
          </div>
          <div>
          <div className="h-full pr-10">
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="relative bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={Img4}
                      alt="boat"
                      className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Boat</h2>
                    <p className="text-sm text-gray-600">USA</p>
                    <div className="flex items-center justify-end mt-4">
                    <div className="text-gray-500 text-xl font-bold">
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
            </div>
          </div>
          <div>
          <div className="h-full pr-10">
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="relative bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={Img2}
                      alt="boat"
                      className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Boat</h2>
                    <p className="text-sm text-gray-600">USA</p>
                    <div className="flex items-center justify-end mt-4">
                    <div className="text-gray-500 text-xl font-bold">
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
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Trending;
