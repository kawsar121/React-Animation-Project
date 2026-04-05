import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CircularText from "../../Library/circularText";
const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: function () {
        return window.innerWidth < 768; // md এর নিচে disable
      },
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-60 max-w-7xl mx-auto text-center md:text-left">
      <div className="flex justify-center">
        <CircularText text="REACT * TAILWIND * ANIMATION *" />
      </div>

      <div>
        <h1 data-aos="fade-left" className="text-2xl md:text-4xl font-bold">
          Our approach is straightforward— prioritizing functionality, speed,
          and clarity for solutions.
        </h1>
      </div>
    </div>
  );
};

export default Section1;
