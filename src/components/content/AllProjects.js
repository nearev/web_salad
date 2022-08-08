export default function AllProjects() {
    return (
        //box paling luar
        <body className="flex justify-center bg-[#323232] h-screen text-white items-center overflow-auto">
            {/* dalem */}
            <div className="flex grid grid-cols-5 gap-x-24">
                <div>
                    <div className="absolute">
                        <button className="peer">
                            <span className="tracking-widest">Office</span>
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
        </body>
    );
}
