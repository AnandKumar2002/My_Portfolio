import React, { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdAdd, IoMdClose } from "react-icons/io";

function SocialMediaFAB() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
    data-aos="zoom-in"
    className="fixed bottom-20 right-0 z-50">
      <div
        className={`flex flex-col items-center space-y-4 ${
          isOpen ? "mt-0" : "mt-4"
        }`}
      >
        {isOpen && (
          <>
            <a
              data-aos="zoom-in"
              href="https://wa.me/8219353946"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>
            <a
              data-aos="zoom-in"
              href="https://www.facebook.com/profile.php?id=100026761293686"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
            >
              <FaFacebook className="text-white text-xl" />
            </a>
            <a
              data-aos="zoom-in"
              href="https://www.instagram.com/__.anand._______/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-600 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
          </>
        )}
      </div>

      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className="w-16 h-16 rounded-full bg-designColor text-white flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 m-4"
      >
        {/* Rotating IoMdAdd icon */}
        <IoMdAdd
          className={`text-3xl transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-180"
          }`}
        />
      </button>
    </div>
  );
}

export default SocialMediaFAB;
