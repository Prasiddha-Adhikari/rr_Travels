import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

function Card({ title, time, location, originalPrice, discountedPrice, discount, featured, image }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110" />
      <div className="p-4">
        {featured && <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">Featured</span>}
        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-between ">
            <div className="opacity-70 italic text-xs">
            <p className="line-clamp-2">{time} - New York, United States</p>
            </div>
            <div>
            <div className="text-red-500 text-xl font-bold">Rs {discountedPrice}</div>
            <div className="text-gray-500 line-through">Rs {originalPrice}</div>
            </div>
          </div>
        </div>
        <div className="text-white bg-red-600 text-sm text-center  font-bold absolute -top-2 -right-9 rotate-45 w-20 pt-5">-{discount}%</div>
      </div>
    </div>
  );
}

export default Card;