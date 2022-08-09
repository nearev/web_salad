import { useState } from "react";

export default function AllProjects() {
    const [hover, setHover] = useState();
    // function handling() {
    //     setHover(true);
    //     console.log(hover);

    //     if (hover === true) {
    //         document.getElementById("box").style.visibility = "visible";
    //     }
    // }

    return (
        //box paling luar
        <div className="flex justify-center bg-[#323232] h-screen text-white items-center overflow-auto">
            {/* dalem */}
            <div className="flex grid grid-cols-5 gap-x-24">
                <div>
                    <div className="absolute">
                        <button
                            className="peer transition ease-in-out duration-200 hover:scale-110"
                            // onMouseEnter={handling}
                        >
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
                            <span className="mt-4">Kantor A</span>
                            <span className="mt-4">Kantor B</span>
                            <span className="mt-4">Kantor ANB</span>
                            <span className="mt-4">Kantor BA</span>
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
