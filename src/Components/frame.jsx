import React from 'react';
import GatewayImage from "./documents/Frame 4.png"

const Frame = () => {
    return (
        <div >
            <div>
                <img src={GatewayImage} alt="Your Gateway to DeFi on Bitcoin" className='flex flex-col justify-center items-center px-60 my-10' />
            </div>

            <div className="bg-black text-white flex flex-col justify-center items-center text-center"> {/* This will make it take full height of the screen */}
                <p className="mb-4 max-w-lg text-2xl">
                    Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus tellus augue.
                </p>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors flex items-center">
                    Get Started
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Frame;
