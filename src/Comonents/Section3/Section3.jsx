import React from "react";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className="relative overflow-hidden py-5 md:py-10 max-w-7xl mx-auto">

      {/* Left Shadow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* Right Shadow */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10"></div>


      <motion.div
        className="flex gap-10 whitespace-nowrap text-xl"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <div className="flex gap-10">
          <p className="text-6xl md:text-8xl font-medium text-black">technology and stragy comibined with creativity in our team</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Section3;
