import React, { useState, useEffect } from 'react';
import token2 from './documents/bit.png';
import product from './documents/ourtoken.png'

const TokenGrid = () => {
    const [tokens, setTokens] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) { // Trigger the animation when the scroll is more than 100px from the top
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    useEffect(() => {
        fetch('https://educated-plain-bonnet.glitch.me/tokens')
            .then((response) => response.json())
            .then((data) => setTokens(data))
            .catch((error) => console.error('Error fetching tokens:', error));
    }, []);

    console.log(tokens);

    return (
        <div className="container mx-auto p-4">
            <div className={`flex flex-col items-center justify-center text-center my-12 transition-opacity duration-500 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>

                {/* <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Products</h2> */}
                <img src={product} className='h-28 w-356' alt='product' />
                <p className="max-w-2xl text-white">
                    Pellentesque habitant morbi tristique senectus et netus et. Pellentesque habitant morbi.
                </p>
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tokens.map((token, index) => (
                    <div key={index} className=" border-2 border-yellow-600-500 bg-gray-900 bg-opacity-90 rounded-lg overflow-hidden shadow-lg p-5 ">
                        <img src={token2} alt={token.tokenName} className="w-28 transform hover:scale-105" />
                        <div className="p-5">
                            <h3 className="text-xl text-white font-bold mb-2">{token.tokenName}</h3>
                            <p className="text-white">Symbol: {token.symbol}</p>
                            <p className="text-white">Decimals: {token.decimals}</p>
                            <p className="text-white">Market Cap: ${token.marketcap.toLocaleString()}</p>
                            <p className="text-white">Chain: {token.chain}</p>
                            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TokenGrid;
