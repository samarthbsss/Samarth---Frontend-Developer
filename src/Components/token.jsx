import React, { useState, useEffect } from 'react';
import token2 from './documents/bit.png';

const TokenGrid = () => {
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        fetch('https://educated-plain-bonnet.glitch.me/tokens')
            .then((response) => response.json())
            .then((data) => setTokens(data))
            .catch((error) => console.error('Error fetching tokens:', error));
    }, []);

    console.log(tokens);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Token</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tokens.map((token, index) => (
                    <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg p-5 ">
                        <img src={token2} alt={token.tokenName} className="w-28" />
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
