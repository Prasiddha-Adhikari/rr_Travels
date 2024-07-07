import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ img, title, location, discount, originalprice, discountedprice, featured }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img src={img} alt={title} className="w-full h-48 object-cover  group-hover:opacity-75 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to="/detail"><button 
            className="bg-pink-500 text-white px-4 py-2 rounded-full"
          >
            Book Now
          </button></Link>
        </div>
        {featured && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase">Featured</span>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-red-500 text-xl font-bold">Rs {discountedprice}</div>
          <div className="text-gray-500 line-through">Rs {originalprice}</div>
        </div>
        <div className="text-white bg-red-700 rotate-45 -right-8 text-center text-sm font-bold absolute top-0 w-20 pt-3">-{discount}%</div>
      </div>
    </div>
  );
};

export default PlaceCard;
