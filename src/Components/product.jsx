import React, { useState, useEffect } from 'react';
import product from './documents/product.png'
import cards from './documents/test.png'

const ProductsHeader = () => {
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

    return (
        <div>
            {/* <div className="flex flex-col items-center justify-center text-center my-12 transition-opacity duration-500 ${isVisible ? 'slide-in-bottom' : 'opacity-0'"> */}
            <div className={`flex flex-col items-center justify-center text-center my-12 transition-opacity duration-500 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>

                {/* <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Products</h2> */}
                <img src={product} className='h-28 w-356' alt='product' />
                <p className="max-w-2xl text-white">
                    Pellentesque habitant morbi tristique senectus et netus et. Pellentesque habitant morbi.
                </p>
            </div>
            <div>
                <img alt='product-cards' src={cards} className='h-38 w-400' />
            </div>
        </div>

    );
};

export default ProductsHeader;
