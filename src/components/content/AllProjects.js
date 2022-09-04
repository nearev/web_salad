import { useState } from "react";
import Gallery from "./Gallery";
import classes from "./Gallery.module.css";
import Modal from "react-modal";

export default function AllProjects() {
    const dummyData = [
        {
            name: "Kantor A",
            category: "Interior",
            status: "Completed",
            image: "https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },

        {
            name: "Kantor B",
            category: "Exterior",
            status: "Not Completed",
            image: "https://www.l37.com.au/cms/content/uploads/2022/01/luxury-home-builders-melbourne-960x645.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(dummyData[0]);
    function openModal(data) {
        setOpen(true);
        setModal(data);
    }

    return (
        //box paling luar
        <div className="flex justify-center bg-[#323232] h-screen text-white items-center overflow-auto">
            {/* dalem */}
            {/* <div className="fixed flex justify-center items-center z-30"> */}
            <Gallery open={open} setOpen={setOpen} data={modal}></Gallery>
            {/* </div> */}

            <div className="flex grid grid-cols-5 gap-x-24">
                <div>
                    <div className="absolute">
                        <button className="peer transition ease-in-out duration-200 hover:scale-110">
                            <span className="tracking-widest">Office</span>
                        </button>

                        <div className="hidden peer-hover:flex hover:flex flex flex-col">
                            {/* <img
                                src="assets/kantor.jpg"
                                className="w-24 h-24 rounded-lg mt-4"
                                alt=""
                            />
                            <img
                                src="assets/9.jpg"
                                className="w-24 h-24 rounded-lg mt-4"
                                alt=""
                            />
                            <img
                                src="assets/tawa.jpg"
                                className="w-24 h-24 rounded-lg mt-4"
                                alt=""
                            />
                            <img
                                src="assets/sasa.jpg"
                                className="w-24 h-24 rounded-lg mt-4"
                                alt=""
                            /> */}

                            {dummyData.map((data) => {
                                return (
                                    <span
                                        className="mt-4"
                                        onClick={() => openModal(data)}
                                    >
                                        {data.name}
                                    </span>
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
                        </div>

                        {/* <div className="hidden peer-hover:flex hover:flex flex flex-col" >
                            <img
                                src="assets/kantor.jpg"
                                className="w-24 h-24 rounded-lg mt-2"
                                alt=""
                            />
                            <img
                                src="assets/9.jpg"
                                className="w-24 h-24 rounded-lg mt-4"
                                alt=""
                            />
                            <img
                                src="assets/tawa.jpg"
                                className="w-24 h-24 rounded-lg mt-4"
                                alt=""
                            />
                            <img
                                src="assets/sasa.jpg"
                                className="w-24 h-24 rounded-lg mt-4"
                                alt=""
                            />
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className="absolute">
                        <button className="peer">
                            <span className="tracking-widest">House</span>
                        </button>
                        <div className="hidden peer-hover:flex hover:flex flex flex-col peer-hover:h-auto hover:h-auto">
                            {dummyData.map((data) => {
                                return (
                                    <span
                                        className="mt-4"
                                        onClick={() => openModal(data)}
                                    >
                                        {data.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>Commercial</div>
                <div>Hospital</div>
                <div>Interior</div>
            </div>
        </div>
    );
}
