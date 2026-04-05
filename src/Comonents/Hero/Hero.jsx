import { motion } from 'framer-motion';
import { ChevronRight, Globe, BarChart, Layout, Cpu, Mail, Phone, MapPin } from 'lucide-react';
import star from '../../assets/star.png'
import google from '../../assets/google-reviews.png'
import good from '../../assets/goodfirms-reviews-1.png'
import clutch from '../../assets/clutch-reviews-1.png'
const Hero = () => {
    return (
        
<section className="relative min-h-screen bg-black text-white px-6 md:px-16 py-20 flex flex-col justify-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        

        <div className="space-y-6">
          <p className="text-sm tracking-[0.2em] text-gray-400 font-medium">
            TOP RATED AND AWARD WINNING
          </p>
          
          <h1 className="text-5xl md:text-[40px] font-bold leading-[1.1] tracking-tight">
            Digital Marketing Agency <br />
            <span className="relative inline-block mt-2">
              That Delivers Results
              
      
              <div className="absolute -bottom-4 left-0 w-full">
                <svg viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path 
                    d="M5 15C50 5 150 5 200 10C250 15 350 15 395 10" 
                    stroke="#FCD34D" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl pt-4">
            Experience transformative results with our internationally recognized Full Service Digital Marketing Agency, 
            renowned for blending innovation and expertise to elevate your brand's online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <input 
              type="text" 
              placeholder="Enter Website Address" 
              className="bg-[#141414] border border-gray-800 rounded-md px-6 py-4 flex-grow outline-none focus:border-[#FCD34D] transition-colors"
            />
            <button className="bg-[#FCD34D] text-black font-bold px-8 py-4 rounded-md hover:bg-yellow-400 transition-all uppercase tracking-wide">
              Get My Free Proposal
            </button>
          </div>
          {/* Brand */}
          <div className="mt-24  grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col items-center md:items-start">
            <img src={star} alt="" />
            <div className="flex justify-items-center gap-1 mt-2">
              <p className="text-sm font-black mb-1">4.9/5</p>
              <span className="text-sm text-gray-500 font-medium">(98 Reviews)</span>
            </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
            <img src={google} alt="" />
            <div className="flex justify-items-center gap-1 mt-2">
              <p className="text-sm font-black mb-1">4.9/5</p>
              <span className="text-sm text-gray-500 font-medium">(98 Reviews)</span>
            </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
            <img src={good} alt="" />
            <div className="flex justify-items-center gap-1 mt-2">
              <p className="text-sm font-black mb-1">4.9/5</p>
              <span className="text-sm text-gray-500 font-medium">(98 Reviews)</span>
            </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
            <img src={clutch} alt="" />
            <div className="flex justify-items-center gap-1 mt-2">
              <p className="text-sm font-black mb-1">4.9/5</p>
              <span className="text-sm text-gray-500 font-medium">(98 Reviews)</span>
            </div>
            </div>
          </div>
        </div>

        {/* Animation */}
        <div className="relative hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square animate-[bounce_10s_infinite_alternate] flex justify-center items-center">
      
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full drop-shadow-[0_0_30px_rgba(252,211,77,0.2)] animate-[pulse_6s_infinite]"
            >
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#FCD34D" />
                </pattern>
              </defs>
              
              <path 
                fill="url(#dotPattern)" 
                d="M45.1,-77.4C58.5,-70.5,69.5,-58.5,77.1,-44.6C84.7,-30.7,88.9,-15.4,87.6,-0.7C86.4,13.9,79.7,27.8,70.5,39.6C61.4,51.4,49.8,61.1,36.5,67.7C23.2,74.3,8.2,77.8,-7.4,75.9C-23,74,-39.2,66.7,-51.7,55.8C-64.2,44.9,-73,30.4,-77.7,14.6C-82.4,-1.2,-83,-18.3,-76.8,-33.2C-70.6,-48.1,-57.6,-60.8,-43.1,-67.2C-28.6,-73.6,-14.3,-73.7,0.4,-74.4C15.1,-75.1,31.7,-84.3,45.1,-77.4Z" 
                transform="translate(100 100)" 
              />
            </svg>


            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>


      

    </section>
    );
};

export default Hero;