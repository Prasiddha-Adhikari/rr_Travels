import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { format } from "date-fns";
import map1 from "../../assets/nav/map.svg";
import { IoIosClock } from "react-icons/io";
import { FaPersonBooth } from "react-icons/fa";

const HotelNavBar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setShowDatePicker(false); // Hide date picker after selecting range
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleSearch = () => {
    // Implement search functionality here,
    console.log("Searching with date range:", startDate, endDate);
  };

  const locations = ["New York", "London", "Paris", "Tokyo"];
  const guest = ["Rooms", "Adults", "Childrens"];

  // Function to format the date display
  const formatDate = (date) => {
    return date ? format(date, "MM/dd/yyyy") : "";
  };

  // Custom function to format the selected dates for display
  const currentDate = format(new Date(), "MM/dd/yyyy");
  const formattedDates =
    startDate && endDate
      ? `${formatDate(startDate)} - ${formatDate(endDate)}`
      : `${currentDate} - ${currentDate}`;

  return (
    <div className="flex space-x-4 bg-white rounded-s-lg rounded-e-lg w-fit">
      <div className="flex">
        <div className="border-1 border-r-0 border-black p-2 rounded-s-lg first:border-r-2 w-[300px]">
          <div className="grid grid-rows-2 grid-flow-col gap-3 h-10">
            <div className="row-span-2 items-center justify-center flex pt-5">
              <img src={map1} alt="" className="w-10" />
            </div>
            <div className="text-sm text-gray-500 col-span-2 mb-2 font-poppins h-6 flex pt-2">
              Location
            </div>
            <Dropdown
              options={locations}
              placeholder="Location"
              controlClassName="border-none outline-none"
            />
          </div>
        </div>
        <div
          className="border-1 border-black p-2 first:border-l-2 flex items-center relative"
          onClick={toggleDatePicker}
        >
          <div className="grid grid-rows-2 grid-flow-col gap-3 h-8">
            <div className="row-span-2 items-center justify-center flex pt-2 w-10">
              <span>
                <IoIosClock size={"45px"} color="#ef499b" />
              </span>
            </div>
            <div className="text-sm text-gray-500 col-span-2 mb-2 font-poppins h-6 flex pt-2">
              From - To
            </div>
            <div className="border-none outline-none text-black p-1 w-[300px] cursor-pointer">
              {formattedDates}
            </div>
            {showDatePicker && (
              <div className="absolute top-16 -left-20 z-1">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  minDate={new Date()}
                  monthsShown={2}
                  placeholderText="MM/dd/yyyy - MM/dd/yyyy"
                  dateFormat="MM/dd/yyyy"
                  calendarClassName="grid grid-cols-2"
                />
              </div>
            )}
          </div>
        </div>
        <div className="border-1 border-r-0 border-black p-2 first:border-r-2 w-[300px]">
          <div className="grid grid-rows-2 grid-flow-col gap-3 h-10">
            <div className="row-span-2 items-center justify-center flex pt-5">
              <span>
                <FaPersonBooth size={"45px"} color="#ef499b" />
              </span>
            </div>
            <div className="text-sm text-gray-500 col-span-2 mb-2 font-poppins h-6 flex pt-2">
              Guests
            </div>
            <Dropdown
              options={guest}
              placeholder="guest"
              controlClassName="border-none outline-none"
            />
          </div>
        </div>
        <div className="border-1 border-black p-4 flex items-center rounded-e-lg bg-pink-500">
          <button className="p-2" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelNavBar;
