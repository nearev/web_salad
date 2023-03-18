import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import DetailPage from "./pages/DetailPage";

function App({ dummyData }) {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/projects"
                    element={<ProjectsPage dummyData={dummyData} />}
                />
                <Route
                    path="/projects/:name"
                    element={<ProjectPage dummyData={dummyData} />}
                />

                <Route
                    path="/projects/:name/:id"
                    element={<DetailPage dummyData={dummyData} />}
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
