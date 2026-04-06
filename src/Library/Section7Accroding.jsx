import { useState } from "react";
import HireUsToday from "./HireUsToday";
import Recomended from "./Recomended";
const data = [
  {
    id: 1,
    title: "User Interface & Experience Design",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-accordion-img1-300x250.webp",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-300x250.webp",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-300x250.webp",
  },
  {
    id: 4,
    title: "Low-Code Development",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-300x250.webp",
  },
];
const Section7Accroding = () => {
    const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };
  return (
  <div className="max-w-6xl mx-auto p-10  bg-black rounded-3xl mt-5">
    <h1 className="text-5xl py-10 text-white text-center">Company expertise</h1>
      {data.map((item) => (
        <div
          key={item.id}
          className="border-t border-b  overflow-hidden shadow-sm"
        >
          <div
            onClick={() => toggle(item.id)}
            className="flex flex-col md:flex-row cursor-pointer"
          >
            {/* Left Content */}
            <div className="flex-1 p-4">
              <div className="flex items-start gap-4">
                
                {/* Toggle */}
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl">
                  {active === item.id ? "-" : "+"}
                </div>

                <div className="w-full">
                  {/* Title */}
                  <h1 className="text-xl font-semibold">
                    {item.title}
                  </h1>

                  {/* Content */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      active === item.id
                        ? "max-h-[500px] opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 text-lg font-medium mb-3">
                      {item.desc}
                    </p>

                    {/* Two buttons */}
                    <div className="flex gap-3 mb-3 flex-wrap">
                      <button className="px-4 py-2 bg-[#ffffff14] text-[#fff] text-sm rounded-2xl uppercase font-medium">
                        Branding
                      </button>
                      <button className="px-4 py-2 border bg-[#ffffff14] text-[#fff] text-sm rounded-2xl uppercase font-medium">
                        Magazie
                      </button>
                    </div>

                    {/* Bottom LEFT button */}
                    <div className="flex justify-start">
                      <button className="px-4 py-2 bg-gray-200 bg-[#ffffff14] text-black text-sm rounded-2xl uppercase font-medium">
                        Product →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ❌ Image (ONLY when active) */}
            {active === item.id && (
              <div className="md:w-[300px] h-[200px] md:h-auto">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover p-5 rounded-3xl"
                />
              </div>
            )}
          </div>
        </div>
      ))}
      <HireUsToday></HireUsToday>
      <Recomended></Recomended>
    </div>
  );
};

export default Section7Accroding;
