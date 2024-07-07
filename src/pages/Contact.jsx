import React from "react";
import bgContact from "../assets/bg-contact.jpg";

const Contact = () => {
  return (
    <div>
      <section>
        <div className="pt-9 font-poppins">
          <div className="container pt-14">
            <div className="flex flex-col  md:flex-row gap-3">
              <div className="w-full">
                <h1 className="text-2xl">We'd love to hear from you</h1>
                <p className="border-b-2 pb-11">
                  Send us a message and we'll respond as soon as possible
                </p>
                {/* form */}
                <div className="pt-10 font-poppins">
                  <div className="bg-white  p-5 w-[75%]">
                    <form
                      id="contactForm"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                      <div className="sm:col-span-2">
                        <input
                          type="text"
                          id="name"
                          name="Name"
                          placeholder="Name"
                          className="w-full border font-poppins border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="sm:col-span-2 font-poppins">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Enter your message"
                          rows="5"
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* image */}
              </div>

              <div>
                <div className="flex-none w-[450px] font-poppins">
                  <div className="grid grid-cols-1 md:grid-cols-1">
                    <div class="relative ">
                      <img
                        src={bgContact}
                        alt=""
                        className="h-[450px] w-[400px] "
                      />
                      <div class="absolute inset-0 flex items-center justify-center text-white pr-48 w-3/4 pt-32 md:flex-none">
                        <div className="p-4 bg-orange-500 text-white h-[450px] w-[400px]">
                          <h2 className="text-xl font-semibold mb-4">
                            Himalayan Yoga And Excursion
                          </h2>
                          <p className="mb-2">
                            Tell. +977-9851117039, +977-9820114877
                          </p>
                          <p className="mb-2">Whatsapp. +9779801035550</p>
                          <p className="mb-2">
                            Email: info@himalayanyogaandexcursion.com.np
                          </p>
                          <p>Ekaltar-Tufan Chowk Bus Stop, Kathmandu.</p>
                        </div>
                      </div>
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

export default Contact;
