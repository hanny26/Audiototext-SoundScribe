import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">AudioToText</div>
        <div className="space-x-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed to align with your header
            duration={500}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={500}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            About
          </Link>
          {/* <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={500}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
