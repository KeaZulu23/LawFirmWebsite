import React from "react";

import Navbar from "../components/Navbar";
import AttorneySection from "../components/Attorneys/attorneySection";
import Footer from "../components/Footer";

const Attorney = () => {
    return (
        <div>
            <Navbar />
            <AttorneySection />
            <Footer />
        </div>
    );
}

export default Attorney;