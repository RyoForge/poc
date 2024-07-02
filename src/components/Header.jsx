import { useState } from "react";
import Logo from '../assets/images/college.png'
import Toggle from '../assets/icons/menu-bar.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-4  bg-opacity-80 backdrop-blur-lg">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <a href="#">
            <img
              src={Logo}
              alt="College Logo"
              className="h-20 p-2"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 text-black">
          <a href="#" className="hover:text-blue-700 font-bold transition-all">Home</a>
          <a href="#" className="hover:text-blue-700 font-bold transition-all">Courses</a>
          <a href="#" className="hover:text-blue-700 font-bold transition-all">Gallery</a>
          <a href="#" className="hover:text-blue-700 font-bold transition-all">Blog</a>
          <a href="#" className="hover:text-blue-700 font-bold transition-all">Events</a>
          <a href="#" className="hover:text-blue-700 font-bold transition-all">Contact Us</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 transition-all">Register</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-black focus:outline-none" onClick={handleMenuToggle}>
          <img src={Toggle} alt="Menu Icon" className="h-8 w-auto" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">
          <a href="#" className="hover:text-blue-700 transition-all">Home</a>
          <a href="#" className="hover:text-blue-700 transition-all">Courses</a>
          <a href="#" className="hover:text-blue-700 transition-all">Gallery</a>
          <a href="#" className="hover:text-blue-700 transition-all">Blog</a>
          <a href="#" className="hover:text-blue-700 transition-all">Events</a>
          <a href="#" className="hover:text-blue-700 transition-all">Contact Us</a>
          <button className="bg-orange-500 text-white py-2 px-4 rounded shadow hover:bg-orange-600 transition-all">Register</button>
        </div>
      )}
    </header>
  );
};

export default Header;
