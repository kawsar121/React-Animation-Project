import { useEffect, useRef } from "react";

export default function Section8() {
  const leftRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex gap-10">
      
      {/* LEFT STICKY CARD */}
      <div className="w-1/2">
        <div className="sticky top-20">
          <div className="relative h-[500px] overflow-hidden rounded-2xl group cursor-pointer">
            
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
            />

            {/* Glitch Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="absolute inset-0 bg-red-500 mix-blend-overlay animate-glitch"></div>
              <div className="absolute inset-0 bg-blue-500 mix-blend-overlay animate-glitch delay-75"></div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 space-y-10">
        
        {/* Top Text */}
        <div>
          <p className="text-gray-500 mb-2">Our Services</p>
          <h2 className="text-3xl font-bold">
            We build modern digital experiences
          </h2>
        </div>

        {/* <div className="grid grid-cols-2 gap-10">
            <div className="bg-white p-5 rounded-xl h-44">
                <p className="text-base text-gray-400">Successful projects completed</p>
                <div className="flex">
                    <span className="text-3xl text-black">2k</span>
                    <span className="text-3xl text-black">+</span>
                </div>
            </div>
            
            <div className="bg-black p-5 rounded-xl flex flex-col items-center justify-center h-96">
                <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8-100x120.webp" alt="" srcset="" />
                <p className="text-white text-base">More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.</p>
            </div>
            <div className="bg-black p-5 rounded-xl flex flex-col items-center justify-center h-96">
                <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8-100x120.webp" alt="" srcset="" />
                <p className="text-white text-base">More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.</p>
            </div>
            <div className="bg-white p-5 rounded-xl h-44">
                <p className="text-base text-gray-400">Successful projects completed</p>
                <div className="flex">
                    <span className="text-3xl text-black">2k</span>
                    <span className="text-3xl text-black">+</span>
                </div>
            </div>
        </div> */}
        <div>
          {/* left */}
          <div className="grid">
            <div className="bg-white p-5 rounded-xl h-40 flex items-center justify-between">
                <p className="text-base text-gray-400">Successful projects completed</p>
                <div className="flex">
                    <span className="text-3xl text-black">2k</span>
                    <span className="text-3xl text-black">+</span>
                </div>
            </div>
            <div className="bg-black p-5 rounded-xl flex flex-col items-center justify-center h-72">
                <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8-100x120.webp" alt="" srcset="" />
                <p className="text-white text-base">More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.</p>
            </div>
        </div>
        {/* Right */}
        <div className="bg-white p-10 h-72">
          <span>star</span>
          <h2 className="text-6xl">4.9/5</h2>
          <hr />
          <p className="text-gray-400">We offer end-to-end creative solutions that make brands unforgettable.</p>
          <p>djfk</p>
        </div>
        <div>
          
        </div>
        </div>


        <div className="h-[300px]"></div>
      </div>
    </div>
  );
}