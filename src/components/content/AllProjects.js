import { useState } from "react";
import Gallery from "./Gallery";
import classes from "./Gallery.module.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function AllProjects({ dummyData }) {
    // const [open, setOpen] = useState(false);
    // const [modal, setModal] = useState(dummyData[0]);
    // function openModal(data) {
    //     setOpen(true);
    //     setModal(data);
    // }
    console.log(dummyData);

    return (
        //Box paling luar
        <div className="flex justify-center bg-[#323232] h-screen text-white items-center overflow-auto">
            {/* dalem */}

            {/* <Gallery open={open} setOpen={setOpen} data={modal}></Gallery> */}

            <div className="flex grid grid-cols-5 gap-x-24">
                <div>
                    <div className="absolute">
                        <button className="peer transition ease-in-out duration-200 hover:scale-110">
                            <span className="tracking-widest">Office</span>
                        </button>

                        <ul className="hidden peer-hover:flex hover:flex flex flex-col peer-hover:h-auto hover:h-auto">
                            {dummyData.map((data, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="mt-4 cursor-pointer transition ease-in-out hover:scale-110"
                                    >
                                        <Link to={`/projects/${data.id}`}>
                                            {" "}
                                            {data.name}
                                        </Link>
                                    </li>
                                );
                            })}

                            {/* <Modal
                                isOpen={open}
                                onRequestClose={closeModal}
                                className={classes.Modal}
                                overlayClassName={classes.Overlay}
                            >
                                <span>Testing</span> <br></br>
                                <button onClick={closeModal}>Close</button>
                            </Modal> */}
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="absolute">
                        <button className="peer transition ease-in-out duration-200 hover:scale-110">
                            <span className="tracking-widest">House</span>
                        </button>
                        <ul className="hidden peer-hover:flex hover:flex flex flex-col peer-hover:h-auto hover:h-auto">
                            {dummyData.map((data, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="mt-4 cursor-pointer transition ease-in-out hover:scale-110"
                                    >
                                        {data.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div>Commercial</div>
                <div>Hospital</div>
                <div>Interior</div>
            </div>
        </div>
    );
}
