import React from "react";
import logo from "../assets/singleLogo.png";

const CircularText = ({ text, image }) => {
  const letters = text.split("");

  return (
    <div className="flex flex-col items-center md:items-start justify-center h-[300px]">
      <div className="relative w-[200px] h-[200px]">
        {/* 🖼️ Center Image (NO ROTATION) */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src={logo}
            alt="center"
            className="w-24 rounded-full object-cover"
          />
        </div>

        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          {letters.map((char, i) => {
            const angle = (360 / letters.length) * i;

            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 text-xs text-white/45"
                style={{
                  transform: `rotate(${angle}deg) translateY(-80px)`,
                  transformOrigin: "0 0",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
      <p className="text-gray-700 text-xl w-96">We design every project with long-term success in mind.</p>
    </div>
  );
};

export default CircularText;
