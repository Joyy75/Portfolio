import React from "react";
import HeroImage from "../assets/mainp.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-90"
      />
      <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-white">
        I'm <span className="text-pink-400">Joyy</span>,&nbsp;
        <TypeAnimation
          sequence={[
            ' FrontEnd Developer',
            2000,
            ' UI UX Designer...',
            3000,
            ' React Developer',
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-blue-400"
          repeat={Infinity}
        />
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
    </div>
      <div className="mt-8 space-x-4">
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-90 px-4 py-2 rounded-full"
        >
          Contact 
        </button>
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white transform transition-transform duration-300 hover:scale-90 px-4 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
