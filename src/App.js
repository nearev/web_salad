import React from "react";
import "./App.css";
import Footer from "./components/bottombar/Footer";
import FooterContact from "./components/bottombar/FooterContact";
import Navbar from "./components/topbar/Navbar";
import Banner from "./components/banner/Banner";
import FeaturedProjects from "./components/content/FeaturedProjects";
function App() {
    return (
        <div className="App tracking-widest">
            <header>
                <Navbar />
                <Banner />
                <FeaturedProjects />
            </header>
            <FooterContact />
            <Footer />
        </div>
    );
}

export default App;
