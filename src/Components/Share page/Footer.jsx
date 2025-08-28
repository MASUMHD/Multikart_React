import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdLocationOn, MdCall, MdEmail, MdPrint } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-4 lg:px-24 mt-20">
      <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Description */}
        <div className="grid md:col-span-2">
          <img src="/Ultikar images/logo.png" alt="Logo" className="h-10 w-44 mb-4 md:mb-0" />
          <p className="text-gray-400 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <div className="flex space-x-8 text-2xl text-gray-700">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaGoogle className="cursor-pointer hover:text-red-500" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTiktok className="cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold text-lg mb-5">MY ACCOUNT</h3>
          <ul className="space-y-3 text-gray-500">
            <li className="hover:text-black cursor-pointer">Mens</li>
            <li className="hover:text-black cursor-pointer">Womans</li>
            <li className="hover:text-black cursor-pointer">Clothing</li>
            <li className="hover:text-black cursor-pointer">Accessories</li>
            <li className="hover:text-black cursor-pointer">Featured</li>
          </ul>
        </div>

        {/* Why We Choose */}
        <div>
          <h3 className="font-semibold text-lg mb-5">WHY WE CHOOSE</h3>
          <ul className="space-y-3 text-gray-500">
            <li className="hover:text-black cursor-pointer">Shipping & Return</li>
            <li className="hover:text-black cursor-pointer">Secure Shopping</li>
            <li className="hover:text-black cursor-pointer">Gallery</li>
            <li className="hover:text-black cursor-pointer">Affiliates</li>
            <li className="hover:text-black cursor-pointer">Contacts</li>
          </ul>
        </div>

        {/* Store Information */}
        <div>
          <h3 className="font-semibold text-lg mb-5">STORE INFORMATION</h3>
          <ul className="space-y-4 text-gray-500">
            <li className="flex items-start space-x-2">
              <MdLocationOn size={25} className="text-gray-700 mt-1" />
              <span>Multikart Demo Store, Demo Store India 345-659</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdCall size={24} className="text-gray-700" />
              <span>Call Us: 123-456-7898</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail size={24} className="text-gray-700" />
              <span>Email: Support@Multikart.Com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdPrint size={24} className="text-gray-700" />
              <span>Fax: 123456</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center md:flex justify-between items-center">
        <p className="text-gray-500 text-lg mb-4 md:mb-0">
          © {new Date().getFullYear()} themeforest powered by pixelstrap
        </p>
        <div className="flex justify-center space-x-4">
          <img
            src="/Ultikar images/imgi_40_payment.png"
            alt="Payment Methods"
            className="h-6 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
