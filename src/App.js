import React from "react";
import "./App.css";
import Footer from "./components/bottombar/Footer";
import FooterContact from "./components/bottombar/FooterContact";
import Navbar from "./components/topbar/Navbar";

function App() {
    return (
        <div className="App tracking-widest">
            <Navbar />
            <div>
                <div className="flex-grow mb-auto">Hello world</div>
                <div>sdahdhassjda</div>
                <div>sdahdhassjda</div>
            </div>
            <FooterContact />
            <Footer />
        </div>
    );
}

export default App;
