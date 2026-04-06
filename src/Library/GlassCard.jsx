import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import logo from "../assets/Logo.png";
import glass from "../assets/glass.jpg";
import { useEffect } from "react";
import { useRef, useState } from "react";
const GlassCard = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cardRef = useRef(null);
    const [hovered, setHovered] = useState(false);
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } =
        cardRef.current.getBoundingClientRect();
  
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
  
      const moveX = x * 30;
      const moveY = y * 30;
  
      cardRef.current.querySelector(
        ".card-image"
      ).style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
      cardRef.current.querySelector(
        ".card-image"
      ).style.transform = `translate(0px, 0px) scale(1)`;
    };
  return (
     <div data-aos="fade-down" className="flex justify-center items-center">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative w-[350px] md:w-[636px] h-[450px] overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
      >
        {/* Image */}
        <img
          src={glass}
          alt="card"
          className="card-image absolute w-full h-full object-cover transition-transform duration-200 ease-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Top Left Logo */}
        <div className="absolute top-4 left-4 z-10">
          <div className="">
            <img src='https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon6.svg' alt=""  className="w-28"/>
          </div>
        </div>

        {/* Top Right Arrow (hover show) */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="bg-white text-black p-2 rounded-full">
          <ArrowUpRight size={18} />
        </div>
      </div>

        {/* Bottom Left Text (hover show) */}
        <div
          className={`absolute bottom-4 left-4 z-10 text-white transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-lg font-semibold">Explore More</h3>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
