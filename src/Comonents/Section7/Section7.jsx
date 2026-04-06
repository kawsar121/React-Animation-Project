import { div } from "framer-motion/client";
import React, { useState } from "react";
import Section7Accroding from "../../Library/Section7Accroding";

const Section7 = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div className="flex gap-3 justify-center items-center mt-10">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
        >
          {/* Plus / Cross */}
          <div className="relative w-3 h-3">
            {/* Horizontal line */}
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transition-all duration-300 
            ${hovered ? "rotate-45" : "rotate-0"} -translate-y-1/2`}
            ></span>

            {/* Vertical line */}
            <span
              className={`absolute top-0 left-1/2 h-full w-[2px] bg-white transition-all duration-300 
            ${hovered ? "rotate-45" : "rotate-0"} -translate-x-1/2`}
            ></span>
          </div>
        </div>
        <h1 className="text-black font-semibold uppercase">More works</h1>
      </div>
      {/* Accroding */}
      <Section7Accroding></Section7Accroding>
    </div>
  );
};

export default Section7;
