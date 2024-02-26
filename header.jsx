import React from 'react';
import logo from "./documents/main.png"

const Header = () => {
    return (
        <nav className="bg-yellow-600 text-white px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Bitverse Finance Logo" className="w-61 h-24" />
                <div className="hidden md:flex space-x-4">
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <a href="#our-products" className="hover:text-gray-300">Our Products</a>
                    <a href="#token-utility" className="hover:text-gray-300">Token Utility</a>
                    <a href="#roadmap" className="hover:text-gray-300">Roadmap</a>
                </div>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded transition duration-300">
                Connect Wallet
            </button>
        </nav>
    );
};

export default Header;