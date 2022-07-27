import React from "react";
import "./App.css";
import Footer from "./components/bottombar/Footer";

import Navbar from "./components/topbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div>
                <div className="flex-grow mb-auto">Hello world</div>
                <div>sdahdhassjda</div>
                <div>sdahdhassjda</div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
