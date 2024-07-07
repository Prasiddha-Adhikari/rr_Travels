import React from "react";
import news from "../assets/news-banner.jpg";
import { Link, NavLink } from "react-router-dom";

const Menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "News",
    link: "/news",
  },
];
const News = () => {
  return (
    <div className="font-poppins">
      <div className="flex">
        <img src={news} alt="about" className="w-full h-[200px] object-cover" />
        <div className="absolute container bg-opacity-40 flex flex-col text-white py-12">
          <p className="text-4xl md:text-2xl ">News</p>
        </div>
      </div>
      <div>
        <ul className="sm:flex hidden items-center gap-3 border-y-2 py-4 container">
          {Menu.map((data) => (
            <li key={data.id}>
              <NavLink
                to={data.link}
                className="inline-block px-3 hover:text-primary duration-200"
              >
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <section>
        <div className="pt-9">
          <div className="container">
            <div className="flex flex-col  md:flex-row gap-3">
              <div className="flex-initial w-full">
              <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-500" role="alert">
  <span class="font-medium">Sorry!</span> nothing matched your search terms. Please try again with some different keywords.
</div>
              </div>
              <div>
                <div className="flex-none w-80">
                  <div className="grid grid-cols-1 md:grid-cols-1">
                    <input
                      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-blue-gray-200 focus:border-blue-500"
                      placeholder="Search"
                    />
                    <div className="flex flex-row pt-5">
                      <h1 className="">About Us</h1>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <hr class="w-48 h-px my-4 bg-slate-950 border-0 dark:bg-black"></hr>
                    </div>
                    <div>
                      <p className="pt-2">
                        Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                        sollicitudin, erat a elementum rutrum, neque sem pretium
                        metus, quis mollis nisl nunc et massa
                      </p>
                    </div>
                    <div className="flex flex-row pt-5">
                      <h1 className="">Recent News</h1>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <hr class="w-48 h-px my-4 bg-slate-950 border-0 dark:bg-black"></hr>
                    </div>
                    <div>
                      <p className="pt-2">
                        
                      </p>
                    </div>
                    <div className="flex flex-row pt-5">
                      <h1 className="">Category</h1>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <hr class="w-56 h-px my-4 bg-slate-950 border-0 dark:bg-black"></hr>
                    </div>
                    <div className="pl-10">
                        <nav className="">
                            <li>Adventure travel</li>
                            <li>Ecotourism</li>
                            <li>Sea Travel</li>
                            <li>Hosted Tour</li>
                            <li>City Trips</li>
                            <li>Escourted Tours</li>
                        </nav>
                    </div>
                    <div className="flex flex-row pt-5">
                      <h1 className="pb-56">Tags</h1>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <hr class="w-64 h-px my-4 bg-slate-950 border-0 dark:bg-black"></hr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
