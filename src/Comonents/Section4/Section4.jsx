import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import CardCard from "../../Library/CardCard";
import GlassCard from "../../Library/GlassCard";

const Section4 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-20 mb-2 md:mb-10">
      <p className="uppercase font-medium text-black mb-2">PORTFOLIO</p>
      <hr className="text-[#999]" />
      <h2
        data-aos="fade-left"
        className="text-3xl md:text-5xl text-black text-center font-medium my-10 "
      >
        Strategy to build powerful <br /> digital solutions.
      </h2>
      <div className="grid md:flex items-center justify-center gap-2">
        <div>
          <CardCard></CardCard>
          <div className="bg-white rounded-xl p-2 w-[350px] mx-auto md:w-[636px] flex items-center justify-between mt-2">
            <p className="text-black uppercase">Aldan Branding</p>
            <p className="text-gray-500 uppercase">2025</p>
          </div>
        </div>
        <div>
          <GlassCard></GlassCard>
          <div className="bg-white rounded-xl p-2 w-[350px] mx-auto  md:w-[636px] flex items-center justify-between mt-2">
            <p className="text-black uppercase">Aldan Branding</p>
            <p className="text-gray-500 uppercase">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
