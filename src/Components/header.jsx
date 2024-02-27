import React from 'react';
import logo from "./documents/main.png"

const Header = () => {
    return (
        <div className="pt-4 bg-gradient-to-r from-black-600 to-yellow-700">
            <nav className="bg-yellow-600 px-4 py-2 flex justify-between items-center rounded-md shadow-md border-b border-gray-800 mx-10">
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Bitverse Finance Logo" className="w-61 h-24" />
                    <div className="hidden md:flex space-x-4">
                        <a href="#about" className="text-sm md:text-base hover:text-gray-300">About</a>
                        <a href="#our-products" className="text-sm md:text-base hover:text-gray-300">Our Products</a>
                        <a href="#token-utility" className="text-sm md:text-base hover:text-gray-300">Token Utility</a>
                        <a href="#roadmap" className="text-sm md:text-base hover:text-gray-300">Roadmap</a>
                    </div>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded-full shadow transition duration-300">
                    Connect Wallet
                </button>
            </nav>
        </div>
    );
};

export default Header;