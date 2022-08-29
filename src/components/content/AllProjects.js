import { useState } from "react";
import Gallery from "./Gallery";
import classes from "./Gallery.module.css";
import Modal from "react-modal";

export default function AllProjects() {
    const dummyData = [
        {
            name: "Kantor A",
            image: "https://upload.wikimedia.org/wikipedia/en/b/b0/Kamen_rider_eurodata.png",
            desc: "Lorem ipsum suka kamen",
        },

        {
            name: "Kantor B",
            image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/4/49920a30-8ccc-41d8-8178-491c6b568960.jpg",
            desc: "Satria suka putra",
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
            <Gallery open={open} setOpen={setOpen} data={modal}>
                Testing
            </Gallery>
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
                            {/* <button className="mt-4" onClick={openModal}>
                                <span>Kantor A</span>
                            </button>

                            <span className="mt-4">Kantor B</span>
                            <span className="mt-4">Kantor ANB</span>
                            <span className="mt-4">Kantor BA</span> */}
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
                            <img
                                src="assets/kantor.jpg"
                                className="w-24 h-24 rounded-lg mt-5"
                                alt=""
                            />
                            <img
                                src="assets/9.jpg"
                                className="w-24 h-24 rounded-lg mt-5"
                                alt=""
                            />
                            <img
                                src="assets/tawa.jpg"
                                className="w-24 h-24 rounded-lg mt-5"
                                alt=""
                            />
                            <img
                                src="assets/sasa.jpg"
                                className="w-24 h-24 rounded-lg mt-5"
                                alt=""
                            />
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
