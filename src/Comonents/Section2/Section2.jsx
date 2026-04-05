import React from "react";
import avater1 from "../../assets/avater1.jpeg";
import avater2 from "../../assets/avater2.jpeg";
import avater3 from "../../assets/avater3.jpeg";
import avater4 from "../../assets/avater4.jpeg";
import girl from "../../assets/girls.png";

const Section2 = () => {
  return (
    <div className="md:flex justify-items-center gap-5 my-20 max-w-7xl mx-auto">
      {/* One */}
      <div className="bg-white w-80 pt-10 bottom-30 left-30 right-28 h-[550px] rounded-2xl mb-20 md:mb-0">
        <h3 className="mx-5">
          <span className="text-7xl md:text-9xl text-black font-semibold">25</span>
          <span className="text-7xl md:text-9xl text-[#999] font-semibold">+</span>
        </h3>
        <h2 className="text-[#999] text-base mx-5">Years of experience</h2>
        <hr className="my-10 text-[#999] mx-5 " />
        <p className="text-xl font-normal text-[#666666] mx-5">
          Explore how we transform ideas into extraordinary digital experiences.
        </p>

        {/* abater */}
        <div className="avatar-group -space-x-1 mt-20 md:mt-24 mx-5 ">
          <div className="avatar">
            <div className="w-12">
              <img src={avater1} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={avater2} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={avater3} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={avater4} />
            </div>
          </div>
        </div>
        <p className="text-[#0a0a0a] text-xl mx-5 ">
          1200 + happy users review
        </p>
      </div>

      {/* Two */}
      <div className="w-80 md:w-[600px] bg-[#0a0a0a] rounded-2xl h-[400px] md:h-[550px] mb-20 md:mb-0">
        <div className="relative rounded-2xl p-6 md:p-12 flex flex-col items-start gap-10">
          {/* 🖼️ LEFT IMAGE */}
          <div className="flex justify-between">
            {/* Left */}
            <div
              data-aos="fade-down"
              className="relative md:w-1/2 flex justify-center md:justify-start"
            >
              <img
                src={girl}
                alt="hero"
                className="w-[200px] md:w-[500px] h-[400px] md:h-[550px] rounded-xl object-cover -mt-20 md:-mt-32 shadow-xl"
              />
            </div>
            {/* 👉 RIGHT CONTENT */}
            <div>
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon1.svg"
                alt=""
                srcset=""
              />
              <img
                className="mt-5"
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon1.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className="md:w-1/2 text-white text-left relative -top-40">
            <h1 className="text-base md:text-2xl font-semibold md:w-[450px]">
              “ At Floka, we merge strategy, creativity, and technology to shape
              brands that people love. ”
            </h1>

            <p className="mt-4 text-gray-400">
              Merizo H. Yelso <span className="text-gray-500">/ CEO</span>
            </p>
          </div>
        </div>
      </div>

      {/* Three */}
      <div className="w-72 h-[550px] flex flex-col gap-2">
        {/* One */}
        <div className="bg-white rounded-2xl p-5 h-[271px]">
          <p className="text-[#999999] text-sm font-normal">Follow us</p>
          <p className="text-[#0A0A0A] font-normal text-xl">
            For check updates
          </p>
          {/* Button group */}
          <div className="mt-20">
            <div className="flex gap-2 mb-1">
              <button
                type="button"
                className="border py-0.5 px-5 rounded-3xl border-gray-300 hover:border-black text-black text-base font-medium"
              >
                DRIBBLE
              </button>
              <button
                type="button"
                className="border py-0.5 px-5 rounded-3xl border-gray-300 hover:border-black text-black text-base font-medium"
              >
                BEHANCE
              </button>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="border py-0.5 px-5 rounded-3xl border-gray-300 hover:border-black text-black text-base font-medium"
              >
                LINKEDIN
              </button>
              <button
                type="button"
                className="border py-0.5 px-5 rounded-3xl border-gray-300 hover:border-black text-black text-base font-medium"
              >
                X
              </button>
              <button
                type="button"
                className="border py-0.5 px-5 rounded-3xl border-gray-300 hover:border-black text-black text-base font-medium"
              >
                XING
              </button>
            </div>
          </div>
        </div>
        {/* Two */}
        <div className="bg-white rounded-2xl p-5 h-[271px]">
          <p className="text-[#999999] text-sm font-normal">Impressions</p>
          
          <div className="mt-20">
            <div className="flex justify-between bg-gray-300 py-0.5 px-2 rounded-lg w-full">
            <p className="text-black font-medium">Solutions</p>
            <p className="text-[#999999]">100%</p>
          </div>
          <div className="flex justify-between bg-black py-0.5 px-2 rounded-lg w-[90%]">
            <p className="text-white font-medium">UI/UX</p>
            <p className="text-[#999999]">90%</p>
          </div>
          <div className="flex justify-between bg-white border border-[#E5E5E5] py-0.5 px-2 rounded-lg w-[72%]">
            <p className="text-black font-medium">Explore</p>
            <p className="text-[#999999]">72%</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
