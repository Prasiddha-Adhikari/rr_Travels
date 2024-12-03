import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

const FooterLinks = [
  {
    key: "1",
    title: "About",
    link: "/about",
  },
  {
    key: "2",
    title: "Hotels",
    link: "/hotels",
  },
  {
    key: "3",
    title: "Trek",
    link: "/trek",
  },
  {
    key: "4",
    title: "Tour",
    link: "/tour",
  },
  {
    key: "5",
    title: "News",
    link: "/news",
  },
];
const supportLink =[
  {
    key: "7",
    title:"Account",
    link:"/account"
  },
  {
    key: "8",
    title: "Legal",
    link:"/legal"
  },
  {
    key: "9",
    title: "Contact",
    link:"/contact"
  },
  {
    key: "10",
    title: "Affiliated Programs",
    link:"/affiliated-programs"
  },
  {
    key: "11",
    title: "Privacy Policy",
    link:"/privacy"
  }
]

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden font-poppins">
        
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-9">
              <div className="">
              HIMALAYAN YOGA AND EXCURSION
              </div>
              <div>
                <div className="pb-3 text-xl">
                  Company
                  </div>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
              </div>
              <div><div className="pb-3  text-xl">Support</div>
              <ul className="flex flex-col gap-3">
                    {supportLink.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul></div>
            </div>
            
            <div className="py-8 px-4">
              <p className="max-h-[60px] border-l-8 border-primary/50">Contact Information</p>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              @copyright 2024 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
