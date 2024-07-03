import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/college.png';
import Toggle from '../assets/icons/menu.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled && !isMenuOpen ? 'bg-white/70 backdrop-blur-lg shadow-lg text-black' : 'bg-transparent text-white'} ${isScrolled ? 'backdrop-blur-md' : ''}`}>
      <nav className="flex justify-between items-center px-4 py-4">
        <div className="text-2xl font-bold">
          {isScrolled && (
            <Link to="/">
              <img
                src={Logo}
                alt="College Logo"
                className="h-16"
              />
            </Link>
          )}
        </div>

        <div className="hidden md:flex gap-4">
          <Link to="/" className="hover:text-blue-700 font-bold transition-all">Home</Link>
          <Link to="/courses" className="hover:text-blue-700 font-bold transition-all">Courses</Link>
          <Link to="#" className="hover:text-blue-700 font-bold transition-all">Gallery</Link>
          <Link to="#" className="hover:text-blue-700 font-bold transition-all">Blog</Link>
          <Link to="#" className="hover:text-blue-700 font-bold transition-all">Events</Link>
          <Link to="#" className="hover:text-blue-700 font-bold transition-all">Contact Us</Link>
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 transition-all">Register</button>
        </div>

        <button className={`md:hidden focus:outline-none ${isScrolled ? 'text-black' : 'text-white'}`} onClick={handleMenuToggle}>
          <img src={Toggle} alt="Menu Icon" className="h-8 w-auto" />
        </button>
      </nav>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={handleMenuToggle}>
        <div className={`fixed top-0 right-0 w-3/4 md:w-1/4 h-full bg-red-500 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
          <div className="flex flex-col items-center gap-4 py-4">
            <Link to="/" className="hover:text-blue-700 transition-all text-white">Home</Link>
            <Link to="/courses" className="hover:text-blue-700 transition-all text-white">Courses</Link>
            <Link to="#" className="hover:text-blue-700 transition-all text-white">Gallery</Link>
            <Link to="#" className="hover:text-blue-700 transition-all text-white">Blog</Link>
            <Link to="#" className="hover:text-blue-700 transition-all text-white">Events</Link>
            <Link to="#" className="hover:text-blue-700 transition-all text-white">Contact Us</Link>
            <button className="bg-orange-500 text-white py-2 px-4 rounded shadow hover:bg-orange-600 transition-all">Register</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
