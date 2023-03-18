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
        <div>
            <div className="grid grid-cols-4 h-screen">
                {dummyData.type.map((type) => (
                    <div className="flex items-center justify-center">
                        <button className="peer transition ease-in-out duration-200 hover:scale-110">
                            <Link to={`/projects/${type.name}`}>
                                <span className="tracking-widest">
                                    {type.name}
                                </span>
                            </Link>
                        </button>

                        {/* <ul className="hidden peer-hover:flex hover:flex flex flex-col peer-hover:h-auto hover:h-auto">
                                    {type.projects.map((project) => (
                                        <li className="mt-4 cursor-pointer transition ease-in-out hover:scale-110">
                                            <Link
                                                to={`/projects/${project.id}`}
                                            >
                                                {project.name}
                                            </Link>
                                        </li>
                                    ))} */}

                        {/* <Modal
                                isOpen={open}
                                onRequestClose={closeModal}
                                className={classes.Modal}
                                overlayClassName={classes.Overlay}
                            >
                                <span>Testing</span> <br></br>
                                <button onClick={closeModal}>Close</button>
                            </Modal> */}
                        {/* </ul> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
