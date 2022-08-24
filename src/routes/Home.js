import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default Home;