import React from "react";
import Header from "./header";
import Frame from "./frame";
import ProductsHeader from "./product";
import Roadmap from "./roadmap";
import TokenGrid from "./token";
import Footer from "./footer";
// import background from "./documents/Gradient.png"


const Home = () => {
    return (
        <div className="bg-black">
            {/* <img src={background} className="absolute inset-0 w-full h-full object-cover" /> */}
            <div className="relative z-10">
                <Header />
                <Frame />
            </div>
            <div>
                <ProductsHeader />

            </div>
            {/* <Roadmap /> */}
            <TokenGrid />
            <Footer />

        </div>
    )

}

export default Home;