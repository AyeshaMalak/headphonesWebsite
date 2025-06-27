import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left animate-fade-in-slide">
          <h1 className="text-4xl md:text-6xl font-bold text-[#00FFB3] mb-6 leading-tight">
            Experience Pure Sound Like Never Before
          </h1>
          <p className="text-gray-200 text-lg max-w-md mx-auto md:mx-0">
            Discover the next level of immersive audio with our premium headphones — engineered for clarity, comfort, and style. Whether you're a music lover or a gamer, hear every detail the way it was meant to be.
          </p>
        </div>

        {/* Right Side - Circular Zoomed Image */}
        <div className="flex-1 flex justify-center md:justify-end -mt-6 md:mt-0">
          <div className="w-[450px] h-[500px] rounded-full bg-black p-2 shadow-2xl overflow-hidden animate-zoom-pulse">
            <img
              src="/hero.png"
              alt="Headphones"
              className="w-full h-full object-cover object-[center_bottom] scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
