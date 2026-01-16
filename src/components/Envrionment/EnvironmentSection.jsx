import React from "react";

// Images
 import envBg from "../../assets/env2.png";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const EnvironmentSection = () => {
  return (
    <section
      className="
        relative
        w-full
        
        bg-[#fff]
        
        // bg-top
        // bg-cover
        py-10 sm:py-14 md:py-22
      "
       style={{ backgroundImage: `url(${envBg})` }}
    >
      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
          A Safe, Loving & <br />
          <span className="text-yellow-400">Inspiring Environment</span>
        </h2>

        <p className="text-white text-xs sm:text-sm md:text-base mt-4 max-w-xl mx-auto">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Faucibus In
          Libero Risus Semper Habitant Arcu Eget.
        </p>

        {/* Gallery */}
        <div
          className="
            mt-12 sm:mt-14 md:mt-16
            grid gap-3 sm:gap-5 md:gap-6
            grid-cols-2 sm:grid-cols-3 md:grid-cols-7
            items-center
          "
        >
          <img
            src={img1}
            alt=""
            className="w-full h-32 sm:h-36 md:h-44 object-cover rounded-2xl border-2 border-yellow-400"
          />
          <img
            src={img2}
            alt=""
            className="w-full h-32 sm:h-36 md:h-44 object-cover rounded-2xl border-2 border-yellow-400"
          />
          <img
            src={img3}
            alt=""
            className="w-full h-52 sm:h-48 md:h-64 object-cover rounded-2xl border-2 border-yellow-400 md:row-span-2"
          />
          <img
            src={img4}
            alt=""
            className="w-full h-32 sm:h-36 md:h-44 object-cover rounded-2xl border-2 border-yellow-400"
          />
          <img
            src={img5}
            alt=""
            className="w-full h-32 sm:h-36 md:h-44 object-cover rounded-2xl border-2 border-yellow-400"
          />
          <img
            src={img6}
            alt=""
            className="w-full h-32 sm:h-36 md:h-44 object-cover rounded-2xl border-2 border-yellow-400"
          />
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
