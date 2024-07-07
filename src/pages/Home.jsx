import React from "react";
import Hero from "../components/Hero/Hero";
import homeMix from "../assets/home-mix.jpg";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/banner-search.jpg";

const Home = () => {

  return (
    <>
      <div>
        <div className="h-[500px] relative">
          <img src={homeMix} alt="" className="absolute right-0 top-0 h-[500px] w-full object-cover z-[-1]"/>
          <Hero />
        </div>
        <BannerPic img={BannerImg} />
        <Places />
        <BlogsComp />
        {/* <Banner /> */}
      </div>
    </>
  );
};

export default Home;
