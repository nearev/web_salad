import { useState } from "react";
import Gallery from "./Gallery";
import classes from "./Gallery.module.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function AllProjects({ dummyData }) {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(dummyData[0]);
    function openModal(data) {
        setOpen(true);
        setModal(data);
    }

    return (
        // buat centerin
        <div className="flex justify-center h-screen">
            <div className="md:flex md:flex-row max-w-[1000px] flex-col items-center w-full h-full md:pt-0 pt-24">
                {dummyData.type.map((type) => (
                    <div className="md:w-[20rem] h-[10rem] flex justify-center">
                        <button className="h-auto peer transition ease-in-out duration-200 hover:scale-110">
                            <Link to={`/projects/${type.name}`}>
                                <span className="tracking-widest block md:inline-block">
                                    {type.name}
                                </span>
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
