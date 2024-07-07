import React, { useState } from "react";
import banner from "../assets/banner-search.jpg";
import icon1 from "../assets/tour/tour-ico1.png";
import icon2 from "../assets/tour/tour-ico2.png";
import icon3 from "../assets/tour/tour-ico3.png";
import Trending from "../components/TrendingTour/Trending";
import PlaceCard from "../components/Places/PlaceCard";
import Img1 from "../assets/places/boat.jpg";
import Img2 from "../assets/places/tajmahal.jpg";
import Img3 from "../assets/places/water.jpg";
import Img4 from "../assets/places/place4.jpg";
import Img5 from "../assets/places/place5.jpg";
import Img6 from "../assets/places/place6.jpg";
import avatar1 from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import StarIcon from "@mui/icons-material/Star";
import HomeNavBar from "../components/Navbar/HomeNavBar";
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

const Tour = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationOpen(false);
  };

  const handleSearch = () => {
    alert(`Location: ${selectedLocation}, Date: ${selectedDate}`);
  };

  return (
    <div className="font-poppins">
      {/* top */}
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
              <div className=" mt-10 justify-center items-center">
                  <div className="rounded-lg">
                  <HomeNavBar />
                  </div>
              </div>
          </div>
        </div>
      {/* second section */}
      <div>
        <div className="container">
          <div className=" flex flex-col md:flex-row">
            <div>
              <img src={icon1} alt="" className="max-w-14" />
            </div>
            <div className="px-10">
              <h1 className="text-xl font-medium">1000+ local guides</h1>
              <p className="text-sm">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
            <div>
              <img src={icon2} alt="" className="max-w-14" />
            </div>
            <div className="px-10">
              <h1 className="text-xl font-medium">HandCrafted Experience</h1>
              <p className="text-sm">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
            <div>
              <img src={icon3} alt="" className="max-w-14" />
            </div>
            <div className="px-10">
              <h1 className="text-xl font-medium">96% happy travelers</h1>
              <p className="text-sm">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="container pt-16">
        <Trending />
      </div>
      {/* fourth section */}
      <div>
        <div className="container pt-10">
          <div>
            <p className="text-4xl">Trending Tours</p>
          </div>
          <div class="grid grid-cols-3 gap-4 pt-7">
            <div className="bg-gray-500 col-span-2 rounded-lg text-white text-2xl flex justify-center items-center h-96 hover:bg-slate-300 transition-transform duration-300">
              Malaysia
            </div>
            <div className="bg-gray-500 text-white rounded-lg flex justify-center text-2xl items-center h-96 hover:bg-slate-300">
              Oman
            </div>
            <div className="bg-gray-500 text-white flex justify-center rounded-lg text-2xl items-center h-96 hover:bg-slate-300">
              Maldives
            </div>
            <div class=" bg-gray-500 text-white flex justify-center rounded-lg items-center text-2xl h-96 hover:bg-slate-300">
              USA
            </div>
            <div class="bg-gray-500 text-white flex justify-center items-center rounded-lg h-96 text-2xl hover:bg-slate-300">
              Canada
            </div>
          </div>
        </div>
      </div>

      {/* fifth section */}
      <div>
        <div className="container pt-10">
          <p className="text-4xl">Local Experience You'll Love</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">
            {PlacesData.map((item, index) => (
              <PlaceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Sixth */}
      <div>
        <div className="pt-5 container">
          <div className="bg-orange-400 text-2xl flex h-44 container">
            <div className="grid grid-cols-2 pt-10">
              <div>
                <h1 className="text-2xl col-span-2 md:text-4xl font-normal">
                  Know your city ?
                </h1>
                <p className="text-sm md:text-[16px] pt-2">
                  Join 2000+ locals & 1200+ contributors from 3000 cities
                </p>
              </div>
            </div>
            <div className="pt-16 pl-10">
              <button className="bg-white text-black text-sm rounded p-2  ">
                Become Local Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* seventh */}
      <div>
        <div className="container pt-10">
          <p className="text-4xl">Our Happy Clients</p>
        </div>
        <div className="container">
          <div className="flex space-x-4 pt-4 p-4">
            <div className="border border-gray-300 p-4 flex-1">
              <div className="flex">
                <img src={avatar1} alt="" />
                <div className="inline-block pl-4 pt-2">
                  <p className="font-medium">Eva Hicks</p>
                  <ul className="sm:flex hidden items-center">
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-[16px] font-light text-slate-500 pt-4">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
            <div className="border border-gray-300 p-4 flex-1">
              <div className="flex">
                <img src={avatar2} alt="" />
                <div className="inline-block pl-4 pt-2">
                  <p className="font-medium">Donald Wolf</p>
                  <ul className="sm:flex hidden items-center">
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-[16px] font-light text-slate-500 pt-4">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
            <div className="border border-gray-300 p-4 flex-1">
              <div className="flex">
                <img src={avatar3} alt="" />
                <div className="inline-block pl-4 pt-2">
                  <p className="font-medium">Charlie Harrington</p>
                  <ul className="sm:flex hidden items-center">
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                    <li className="">
                      {" "}
                      <StarIcon style={{ color: "yellow" }} fontSize="18px" />
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-[16px] font-light text-slate-500 pt-4">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* stop */}
      
    </div>
  );
};

export default Tour;
