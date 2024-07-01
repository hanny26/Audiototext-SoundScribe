import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-6 shadow-2xl fixed w-full z-10 shadow-slate-400">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white font-bold text-xl  ">
          SoundScribe
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed to align with your header
            duration={500}
            className="text-white hover:text-blue-400 hover:shadow-slate-300 cursor-pointer transition duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={500}
            className="text-white hover:text-blue-400 cursor-pointer transition duration-300"
          >
            About
          </Link>
          {/* <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={500}
            className="text-white hover:text-blue-400 cursor-pointer transition duration-300"
          >
            Contact
          </Link> */}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed to align with your header
            duration={500}
            className="text-white hover:text-blue-400 cursor-pointer transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={500}
            className="text-white hover:text-blue-400 cursor-pointer transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {/* <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={500}
            className="text-white hover:text-blue-400 cursor-pointer transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
