import React from "react";

import Navbar from "../components/Navbar";
import AboutSection from "../components/About/aboutSection";
import BannerSection from "../components/About/bannerSection";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutSection />
            <BannerSection />
            <Footer />
        </div>
    );
}

export default About;