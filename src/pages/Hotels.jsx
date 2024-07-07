import React, { useState } from "react";
import hotel from "../assets/banner-hotel.jpg";
import icon1 from "../assets/hotel-icon-1.svg";
import icon2 from "../assets/hotel-icon-2.svg";
import icon3 from "../assets/hotel-icon-3.svg";
import Places from "../components/Places/Places";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HotelNavBar from "../components/Navbar/HotelNavBar";
const Hotels = () => {
  // const [selectedOption, setSelectedOption] = useState("hotel");

  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedListItem, setSelectedListItem] = useState("");

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];
  const listItems = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationOpen(false);
  };

  const handleListItemSelect = (item) => {
    setSelectedListItem(item);
    setListOpen(false);
  };

  const handleSearch = () => {
    alert(
      `Location: ${selectedLocation}, Date: ${selectedDate}, List Item: ${selectedListItem}`
    );
  };

  return (
    <>
      <div className="font-poppins">
        <img src={hotel} alt="" className="absolute w-full h-[450px]" />
        <div className="relative h-[80vh] bg-cover bg-center">
          <div className="flex flex-col text-white justify-center pt-28 container">
            <h1 className="text-4xl md:text-6xl font-bold">
              Find your perfect holiday
            </h1>
            <p className="text-lg md:text-2xl mt-4">
              Get the best price 0n 20000+ properties
            </p>
          </div>
          <div className="absolute pt-16 inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
            <div className=" mt-2 p-4 rounded-lg shadow-lg">
              <div className="container">
                <div className="inset-0 bg-opacity-40 flex flex-col justify-center text-center">
                <HotelNavBar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container border-b-4 pb-7 border-b-gray-500">
          <div className=" flex flex-col md:flex-row">
            <div>
              <img src={icon1} alt="" className="max-w-14" />
            </div>
            <div className="px-10">
              <h1 className="text-xl font-medium">20,000+ properties</h1>
              <p className="text-sm">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
            <div>
              <img src={icon2} alt="" className="max-w-14" />
            </div>
            <div className="px-10">
              <h1 className="text-xl font-medium">Trust & Safety</h1>
              <p className="text-sm">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
            <div>
              <img src={icon3} alt="" className="max-w-14" />
            </div>
            <div className="px-10">
              <h1 className="text-xl font-medium">Best Price Guarantee</h1>
              <p className="text-sm">
                Morbi semper fames lobortis ac hac penatibus
              </p>
            </div>
          </div>
        </div>
        <Places />
      </div>
    </>
  );
};

export default Hotels;
