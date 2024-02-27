import React from 'react';
import { FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-4 flex justify-between items-center p-20">
            <div className="font-bold text-xl">
                Join our <span className="text-yellow-400">Community</span>
            </div>
            <div className="flex">
                <a href="mailto:info@yourdomain.com" className="mx-2 bg-yellow-500 rounded-full text-black p-3">
                    <FaEnvelope />
                </a>
                <a href="https://twitter.com/yourusername" className="mx-2 bg-yellow-500 rounded-full text-black p-3">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com/yourusername" className="mx-2 bg-yellow-500 rounded-full text-black p-3">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
