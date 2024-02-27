import React from 'react';
import { FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-4 md:flex md:justify-between md:items-center">
            <div className="font-bold text-xl text-center md:text-left py-88 md:px-0 my-4 md:my-0">
                Join our <span className="text-yellow-400">Community</span>
            </div>
            <div className="flex justify-center md:justify-start space-x-2">
                <a href="mailto:info@yourdomain.com" className="bg-yellow-500 rounded-full text-black p-3 hover:bg-yellow-600 transition-colors duration-300">
                    <FaEnvelope />
                </a>
                <a href="https://twitter.com/yourusername" className="bg-yellow-500 rounded-full text-black p-3 hover:bg-yellow-600 transition-colors duration-300">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com/yourusername" className="bg-yellow-500 rounded-full text-black p-3 hover:bg-yellow-600 transition-colors duration-300">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
