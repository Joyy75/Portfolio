import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto py-4 flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold md:text-4xl">Joyy</div>
        <div className="flex flex-row flex-wrap items-center gap-4">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#service" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#learning" className="hover:text-gray-400">
            Learn
          </a>
          {/* <a href="#contact" className="hover:text-gray-400">
            Contact
          </a> */}
        </div>

        <div className="hidden  sm:block md:block">
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fyes_im_joyy%2F%3Figsh%3DM21uam15Ynpya2oy%26utm_source%3Dqr&is_from_rle">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-90 sm: ">
              Connect Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
