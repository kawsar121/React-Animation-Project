import { useState } from "react";

const HireUsToday = ()=> {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex ml-20 mt-10">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex gap-3 items-center cursor-pointer transition-all duration-300 ${
          hovered ? "-translate-x-2" : "translate-x-0"
        }`}
      >
        {/* Button */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="relative w-3 h-3">
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-black transition-all duration-300 
              ${hovered ? "rotate-45" : "rotate-0"} -translate-y-1/2`}
            ></span>

            <span
              className={`absolute top-0 left-1/2 h-full w-[2px] bg-black transition-all duration-300 
              ${hovered ? "rotate-45" : "rotate-0"} -translate-x-1/2`}
            ></span>
          </div>
        </div>

        <h1 className="text-white font-semibold uppercase">
          Hire Us Today
        </h1>
      </div>
    </div>
  );
}
export default HireUsToday;