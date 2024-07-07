import React from "react";
import about from "../assets/about.jpg";
import ban from "../assets/banner-new-2.jpg";
import icon_mission from "../assets/icon_global.svg";
import icon_vision from "../assets/icon_support.svg";
import icon_goals from "../assets/ico_adventurous.png";
import img1 from "../assets/customer-feedback-2.jpg";
import img2 from "../assets/detail.png";
import img3 from "../assets/ico_quest.png";

const About = () => {
  return (
    <>
      <div className="pt-8 font-poppins">
        <div className="flex justify-center">
          <img
            src={about}
            alt="about"
            className="w-full h-[340px] object-cover"
          />
          <div className="absolute bg-opacity-40 flex flex-col text-center items-center justify-center text-white py-12">
            <p className="text-[28px] font-poppins">About Us</p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="py-1">
          <h1 className=" my-8 border-l-8 font-poppins font-[28px] border-primary/50 pt-2 pl-2 text-3xl ">
            About us
          </h1>
          <p className="font-poppins">
            Raj and Rose Travel and Tours Pvt. Ltd., nestled in the heart of
            Kathmandu, Nepal, in the vibrant neighborhood of Sinamangal, is your
            premier travel partner for exploring the world's wonders. As a
            licensed and registered travel and tour company, we pride ourselves
            on offering an array of domestic and international holiday packages,
            efficient ticketing services, and comprehensive tourism-related
            solutions. Our central location in Kathmandu allows us to be at the
            forefront of the bustling travel industry, ensuring that you receive
            unparalleled support and guidance for your travel adventures.
            Whether you seek Himalayan treks, cultural immersions, or far-flung
            escapades, our team is dedicated to making your journey an
            unforgettable experience. Explore the globe with confidence and
            convenience - choose Raj and Rose Travel and Tours Pvt. Ltd. in
            Sinamangal, Kathmandu, as your trusted gateway to the world.
          </p>
        </div>
      </div>
      <div className="pt-8">
        <div className="container">
          <div className=" flex flex-col md:flex-row">
            <div>
              <img src={icon_mission} alt="" className="max-w-14" />
            </div>
            <div className="px-10 font-poppins">
              Mission
              <p className="text-sm font-poppins">
                Our mission is to provide exceptional travel experiences, both
                domestic and international, that inspire and create lasting
                memories. We are committed to delivering top-tier services,
                promoting cultural understanding, and contributing to the growth
                of the global travel community.
              </p>
            </div>
            <div>
              <img src={icon_vision} alt="" className="max-w-14" />
            </div>
            <div className="px-10 font-poppins ">
              Vision
              <p className="text-sm font-poppins ">
                Our vision is to become the leading travel and Tour Company,
                setting new standards of excellence. We aim to offer an
                extensive range of meticulously crafted holiday packages,
                cost-effective services, and an enriching journey to beautiful
                destinations. We aspire to create a world where every traveler
                can explore and appreciate the beauty of our planet.
              </p>
            </div>
            <div>
              <img src={icon_goals} alt="" className="max-w-14" />
            </div>
            <div className="px-10 font-poppins ">
              Goals
              <p className="text-sm font-poppins ">
                Our goals is to provide exceptional travel experiences, both
                domestic and international, that inspire and create lasting
                memories. We are committed to delivering top-tier services,
                promoting cultural understanding, and contributing to the growth
                of the global travel community.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <section>
        <div className="container">
          <div>
            <h1 className="pt-14 text-3xl font-poppins ">
              Why choose Raj and Rose Travels and Tours?
            </h1>
          </div>
          <div>
            <p className="font-light text-sm font-poppins ">
              At Raj and Rose Travel and Tours Pvt. Ltd., we are more than just
              a travel company. We are your partners in exploration, your guides
              to new horizons, and your gateway to unforgettable journeys. Join
              us on a voyage of discovery, adventure, and cultural enrichment.
              Your next great adventure starts here with us.
            </p>
          </div>
          <div>
            <h1 className="pt-14 text-3xl font-poppins ">
              Raj and Rose - Your Gateway in Sinamangal, Kathmandu
            </h1>
          </div>
          <div>
            <p className="font-light text-sm font-poppins ">
              Raj and Rose Travel and Tours Pvt. Ltd., headquartered in the
              vibrant area of Sinamangal, Kathmandu, is your trusted travel
              partner for exploring the world's wonders. Established as a
              licensed and registered travel and tour company, this company has
              gained a remarkable reputation for its dedication to providing
              top-notch services. Situated near the Tribhuvan International
              Airport, Raj and Rose Travels is ideally located to serve your
              travel needs efficiently. Sinamangal, an area bustling with the
              excitement of travelers coming and going, is the perfect setting
              for a travel company. The close proximity to the airport makes it
              incredibly convenient for those arriving in or departing from
              Kathmandu. Whether you're seeking to explore the mystic beauty of
              Nepal's landscapes or embark on an international adventure, Raj
              and Rose Travels is your gateway to extraordinary journeys. This
              company's commitment to delivering unforgettable travel
              experiences, both domestic and international, is evident in its
              diverse range of services, including meticulously crafted holiday
              packages, efficient ticketing services, and comprehensive
              tourism-related solutions. Their presence in Sinamangal ensures
              that you'll receive personalized support and guidance right from
              the heart of Nepal's travel industry. With a team of experienced
              professionals and a passionate approach to travel, Raj and Rose
              Travel and Tours Pvt. Ltd. in Sinamangal, Kathmandu, is the ideal
              starting point for your travel dreams. Explore the world with
              confidence, knowing that your journey is in the capable hands of
              dedicated experts.
            </p>
          </div>
          <div className="pt-8 font-poppins ">
            <div className="flex">
              <img
                src={ban}
                alt="about"
                className="w-[100%] h-44 bg-left object-cover"
              />
              <div className="absolute bg-opacity-40 flex flex-col text-center items-center justify-center text-white py-12">
                <p className="text-4xl md:text-2xl ">Discount 50% Off</p>
                <p>Curabitur blandit tempus porttitor</p>
                <div>
                  <button className="bg-white text-black rounded ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins ">
            <h1 className="pt-14 text-3xl">
              Unveil the Wonders of Dubai with Raj and Rose Travel and Tours
            </h1>
          </div>
          <div className="font-poppins ">
            <p className="font-light text-sm">
              Dubai, the city of superlatives, awaits your exploration, and Raj
              and Rose Travel and Tours Pvt. Ltd. is your trusted guide to this
              extraordinary destination. With the gleaming city of Dubai on the
              horizon, Raj and Rose Travels invites you to experience the
              opulence and wonder of this dynamic city. Dubai is a place where
              modernity and tradition coexist harmoniously. From the iconic Burj
              Khalifa to the bustling markets of Deira, Dubai offers a diverse
              range of experiences. Raj and Rose Travels presents carefully
              crafted holiday packages that ensure you explore Dubai in all its
              glory, from the magnificent deserts to the luxurious skyscrapers.
              Your journey with Raj and Rose Travels in Dubai is characterized
              by personalized service, seamless itineraries, and a commitment to
              creating memories that last a lifetime. Whether you seek adventure
              in the dunes, a taste of luxury in world-class hotels, or a
              glimpse into the city's rich culture, this travel company ensures
              that your Dubai holiday is unforgettable.
            </p>
          </div>
          <div className="font-poppins ">
            <h1 className="pt-1 text-3xl">
              European Escapes with Raj and Rose Travel and Tours
            </h1>
          </div>
          <div className="font-poppins ">
            <p className="font-light text-sm">
              If you've ever dreamt of exploring the enchanting beauty and
              diverse cultures of Europe, Raj and Rose Travel and Tours Pvt.
              Ltd. can turn your dreams into a reality. This travel company,
              based in Sinamangal, Kathmandu, offers exceptional European
              holiday packages that cater to every type of traveler. From the
              historic cities of Europe, like Paris, Rome, and Vienna, to the
              picturesque landscapes of Switzerland and the Mediterranean coast,
              Raj and Rose Travels takes you on a journey through the best
              Europe has to offer. Immerse yourself in the art, history, and
              cuisine of Europe, all while enjoying the convenience of expertly
              crafted itineraries and personalized service. With Raj and Rose
              Travels, your European vacation becomes a seamless, unforgettable
              experience. Whether you're seeking cultural immersion, historic
              exploration, or simply the pleasure of discovering new places,
              this travel company ensures that your European escape is a memory
              you'll treasure for a lifetime.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-8 font-poppins ">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols
            -3 gap-4"
          >
            <div className="flex flex-col items-center justify-center">
              <img src={img1} alt="" className="w-fit h-full" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="container font-poppins ">
          <div>
            <h1 className="pt-14 text-3xl">
              Unveil the Wonders of Dubai with Raj and Rose Travel and Tours
            </h1>
          </div>
          <div className="font-poppins" >
            <p className="font-light text-sm ">
              Dubai, the city of superlatives, awaits your exploration, and Raj
              and Rose Travel and Tours Pvt. Ltd. is your trusted guide to this
              extraordinary destination. With the gleaming city of Dubai on the
              horizon, Raj and Rose Travels invites you to experience the
              opulence and wonder of this dynamic city. Dubai is a place where
              modernity and tradition coexist harmoniously. From the iconic Burj
              Khalifa to the bustling markets of Deira, Dubai offers a diverse
              range of experiences. Raj and Rose Travels presents carefully
              crafted holiday packages that ensure you explore Dubai in all its
              glory, from the magnificent deserts to the luxurious skyscrapers.
              Your journey with Raj and Rose Travels in Dubai is characterized
              by personalized service, seamless itineraries, and a commitment to
              creating memories that last a lifetime. Whether you seek adventure
              in the dunes, a taste of luxury in world-class hotels, or a
              glimpse into the city's rich culture, this travel company ensures
              that your Dubai holiday is unforgettable.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-8 container font-poppins ">
          <div className="py-1 flex items-center justify-center">
            <h1 className=" my-8 py-2 pl-2 text-3xl font-bold">FAQs</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <img src={img3} alt="" className="" />{" "}
              <h1 className="pl-2 text-[20px]">
                {" "}
                1. How can I contact Raj and Rose Travels and Tours?
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <img src={img3} alt="" />{" "}
              <p className="pl-2 text-[20px]">
                {" "}
                2. How can I contact Raj and Rose Travels and Tours?
              </p>
            </div>
            <div className="pl-8 border-b-2 pb-6">
              <p className="text-[15px]">
                You can reach us through our contact page on our website, or you
                can call us at our contact number. Our office is also
                conveniently located at Sinamangal, Kathmandu, for in-person
                inquiries.
              </p>
            </div>
            <div className="pl-8 border-b-2 pb-9 ">
              <p className="text-[15px]">
                You can reach us through our contact page on our website, or you
                can call us at our contact number. Our office is also
                conveniently located at Sinamangal, Kathmandu, for in-person
                inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
