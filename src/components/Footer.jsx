import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
   const [subscribeEmail, setSubscribeEmail] = useState('');
   const handleSubscribe = () => {
    if (!subscribeEmail.trim()) {
      toast.error('Please enter your email to subscribe.');
      return;
    }

    toast.success('Subscribed successfully!');
    setSubscribeEmail('');
  };
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Joyy</h3>
            <p className="text-gray-400">
               Developer based in the ygn, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                 value={subscribeEmail}
          onChange={(e) => setSubscribeEmail(e.target.value)}
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
              onClick={handleSubscribe}
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Joyy. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/juu.yong.9?mibextid=wwXIfr&rdid=IYSph9b8hQ1nh6p9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DaCy5Qh2T%2F%3Fmibextid%3DwwXIfr#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/thiri-thal-su-hlaing-498108267" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Joyy75" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fyes_im_joyy%2F%3Figsh%3DM21uam15Ynpya2oy%26utm_source%3Dqr&is_from_rle" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;