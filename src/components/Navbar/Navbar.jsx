import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Menu = [
  {
    key: "1",
    name: "Home",
    link: "/",
  },
  {
    key: "2",
    name: "About",
    link: "/about",
  },
  {
    key: "3",
    name: "Hotels",
    link: "/hotels",
  },
  {
    key: "4",
    name: "Trek",
    link: "/trek",
  },
  {
    key: "5",
    name: "Tour",
    link: "/tour",
  },
  {
    key: "6",
    name: "News",
    link: "/news",
  },
  {
    key: "7",
    name: "Contact",
    link: "/contact",
  },
];

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  return (
    <div className="shadow-md bg-white ">
      {/* upper Navbar */}
      <div className="bg-primary py-3 dark:text-white duration-200 relative z-40 font-sans px-24 text-sm">
        <div className=" flex justify-between items-center">
          <div className="text-white">
            <p>
              +977-9851117039 | +977-9851117039| info@hye.com.np
            </p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <button
              className="text-white py-1 px-4 rounded-full flex items-center gap-3 group bg"
              onClick={openLoginModal}
            >
              Login
            </button>
            <button
              className="text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              onClick={openSignupModal}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex py-6 pl-24">
        <div>
          <Link to="/" className="font-bold text-3xl sm:text-4xl flex gap-4 ">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="sm:flex hidden items-center gap-3">
          {Menu.map((data) => (
            <li key={data.key}>
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

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">Login</h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-[50px]"
                onClick={closeLoginModal}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">Signup</h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-[50px]"
                onClick={closeSignupModal}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
