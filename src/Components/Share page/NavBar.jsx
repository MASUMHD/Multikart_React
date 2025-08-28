import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiSettings, FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Feature", path: "/feature" },
    { name: "Shop", path: "/shop" },
    { name: "Product", path: "/products" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
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
            <div className="flex items-center space-x-1">
              <img
                src="https://i.postimg.cc/JzKC4WX4/logo.png"
                alt="Multikart Logo"
                className="h-8"
              />
            </div>
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
            <div className="flex items-center space-x-5">
              <FiSearch className="cursor-pointer text-2xl hover:text-teal-500" />
              <FiSettings className="cursor-pointer text-2xl hover:text-teal-500" />
              <div className="relative hover:text-teal-500 cursor-pointer">
                <FiShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
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
          <img src="https://i.postimg.cc/JzKC4WX4/logo.png" alt="Multikart Logo" className="h-8" />
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
    </>
  );
};

export default NavBar;
