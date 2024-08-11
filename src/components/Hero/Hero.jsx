// eslint-disable-next-line no-unused-vars
import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Nav section */}
          <Navbar />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md-mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                 }}
               className="text-7xl font-bold leading-tight ml-14">
                Black thumbler
              </motion.h1>
              <motion.div
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ 
                 type: "spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 1.2,
                }}               
                className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lover</h1>
                  <h1 className="text-sm opacity-55">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam blanditiis cumque nemo molestias repudiandae aliquam
                    laboriosam, modi a omnis perferendis cupiditate voluptatum
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image section */}
            <div className="relative ">
              <img
                src={BlackCoffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px]  image-shadow"
              />
              {/* orange ring circle */}
              <div
                className="h-[180px] w-[180px] absolute top-24 -right-20
                border-primary border-[20px] rounded-full z-10"
              ></div>
              {/* big text section */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Tumbler
                </h1>
              </div>
            </div>
            {/* third div section */}
            <div className="text-lightOrange mt-[100px] md-mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black thumbler
              </h1>
              <div className="relative">
                <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                 }} 
                className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lover</h1>
                  <h1 className="text-sm opacity-55">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam blanditiis cumque
                  </h1>
                </motion.div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[180px] bg-darkGray/50"></div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
