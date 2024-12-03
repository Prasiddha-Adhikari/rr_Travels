import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    width:"100%",
  };
  return (
    <div className="py-11 px-28 font-poppins">
    <div className="h-52 flex" style={bgImage}>
      <div className="absolute bg-opacity-40 flex flex-col justify-center text-white items-center py-12">
        <h1 className="text-xl md:text-5xl font-semibold">
          Travel with Raj & Rose
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Experience best Travel Ever
        </p>
        </div>
        </div>
    </div>
  );
};

export default BannerPic;
