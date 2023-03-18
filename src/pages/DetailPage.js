import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/content/Gallery";

export default function DetailPage({ dummyData }) {
    const { name, id } = useParams();
    // const project = dummyData.type.find(
    //     (data) => data.projects.id === id && data.name === name
    // );
    // const project = dummyData.type.find(
    //     (data) =>
    //         data.name === name && data.projects.find((info) => info.id === id)
    // );
    const project = dummyData.type
        .find((data) => data.name === name)
        ?.projects.find((info) => info.id === id);
    console.log(project);
    return (
        <main>
            {/* <Gallery project={project} /> */}
            <div className="top-28 relative px-8 w-full h-auto">
                <div className="flex justify-between">
                    <div className="w-1/5">
                        <span className="text-2xl font-bold">
                            {project.name}
                        </span>
                        <div>
                            <span className="font-semibold">
                                {project.category}
                            </span>
                            ,{" "}
                            <span className="italic font-normal">
                                {project.status}
                            </span>
                        </div>
                        <div className="py-2">
                            <p className="text-justify text-2 font-light">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                    <div className="h-[80vh] w-3/4 bg-white rounded-lg">
                        <img
                            src="https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149"
                            className="w-full h-5/6 object-cover rounded-t-lg"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
