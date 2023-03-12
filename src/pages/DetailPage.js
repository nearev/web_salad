import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/content/Gallery";

export default function DetailPage({ dummyData }) {
    const { id } = useParams();
    const project = dummyData.find((data) => data.id === id);
    return (
        <main>
            <Gallery project={project} />
        </main>
    );
}
