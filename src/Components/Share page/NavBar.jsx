import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";
import AddToCard from "./AddToCard";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
    { name: "Blog", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Feature", path: "/feature" },
  ];

  return (
    <>
      {/* Header */}
      <header className="w-full shadow-sm sticky top-0 bg-white z-30 px-4 lg:px-24">
        <div className="py-7 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Icon */}
            <span
              onClick={() => setIsOpen(true)}
              className="md:hidden text-gray-800 cursor-pointer text-3xl"
            >
              <FiMenu />
            </span>

            {/* Logo */}
            <Link to="/">
              <div className="flex items-center space-x-1 cursor-pointer">
                <img
                  src="https://i.postimg.cc/JzKC4WX4/logo.png"
                  alt="Multikart Logo"
                  className="h-8"
              />
            </div>
          </Link>
        </div>

          {/* Nav links & icons */}
          <div className="flex items-center space-x-16 text-gray-600">
            {/* Nav Links (Desktop) */}
            <nav className="hidden md:flex space-x-10 text-lg text-gray-900">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-teal-500 ${isActive ? "text-teal-500" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-5 relative">
              {/* Search */}
              <FiSearch className="cursor-pointer text-2xl hover:text-teal-500" />

              {/* Settings with Dropdown */}
              <div className="relative">
                <FiSettings
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="cursor-pointer text-2xl hover:text-teal-500"
                />

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-50">
                    <ul className="py-2">
                      <Link to="/login">
                        <p className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                          Login
                        </p>
                      </Link>
                      <Link to="/register">
                        <p className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                          Register
                        </p>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              {/* Cart Icon */}
              <div
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-teal-500 cursor-pointer"
              >
                <FiShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <img
            src="https://i.postimg.cc/JzKC4WX4/logo.png"
            alt="Multikart Logo"
            className="h-8"
          />
          <span
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-2xl"
          >
            <FiX />
          </span>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `hover:text-teal-500 ${isActive ? "text-teal-500" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* Cart Drawer */}
      <AddToCard isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};

export default NavBar;
