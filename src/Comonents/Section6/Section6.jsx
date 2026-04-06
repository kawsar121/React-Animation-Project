import React from "react";
import RunnignCard from "../../Library/RunnignCard";
import SunligthCard from "../../Library/SunligthCard";

const Section6 = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 mb-2 md:mb-10">
      <div className="grid md:flex items-center justify-center gap-2">
        <div>
          <RunnignCard></RunnignCard>
          <div className="bg-white rounded-xl p-2 w-[350px] mx-auto md:w-[636px] flex items-center justify-between mt-2">
            <p className="text-black uppercase">Aldan Branding</p>
            <p className="text-gray-500 uppercase">2025</p>
          </div>
        </div>
        <div>
          <SunligthCard></SunligthCard>
          <div className="bg-white rounded-xl p-2 w-[350px] mx-auto  md:w-[636px] flex items-center justify-between mt-2">
            <p className="text-black uppercase">Aldan Branding</p>
            <p className="text-gray-500 uppercase">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
