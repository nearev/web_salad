import { useState } from "react";
import Gallery from "./Gallery";

export default function AllProjects() {
    // function handling() {
    //     setHover(true);
    //     console.log(hover);

    //     if (hover === true) {
    //         document.getElementById("box").style.visibility = "visible";
    //     }
    // }
    const [open, setOpen] = useState(false);
    function openModal() {
        setOpen(true);
    }

    return (
        //box paling luar
        <div className="flex justify-center bg-[#323232] h-screen text-white items-center overflow-auto">
            {/* dalem */}
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
                            <button className="mt-4" onClick={openModal}>
                                <span>Kantor A</span>
                            </button>

                            <span className="mt-4">Kantor B</span>
                            <span className="mt-4">Kantor ANB</span>
                            <span className="mt-4">Kantor BA</span>
                            <Gallery
                                open={open}
                                setOpen={setOpen}
                                className="h-screen relative"
                            >
                                Testing
                            </Gallery>
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
