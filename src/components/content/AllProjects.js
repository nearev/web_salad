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
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: [
                "https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149",
                "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
                "https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501",
                "https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501",
                "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            ],
        },

        {
            name: "Kantor B",
            category: "Exterior",
            status: "Not Completed",
            desc: "Lorem kok kolor.",
            images: [
                "https://cdn-cms.pgimgs.com/static/2019/05/Gedung-Perkantoran-3.jpg",
                "https://images.bisnis-cdn.com/posts/2014/04/08/217930/lippokuninganok.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5HSmTwU3ssCo7VQFnN9dGPBzotl2QMTmq4QIxbTVedJbDTG2BwWGhxflCDyGHs1u9bU&usqp=CAU",
                "https://pict.sindonews.net/dyn/620/content/2015/06/24/150/1016163/gedung-kantor-baru-tetap-marak-xaY-thumb.jpg",
                ,
            ],
        },
    ];
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(dummyData[0]);
    function openModal(data) {
        setOpen(true);
        setModal(data);
    }

    return (
        //Box paling luar
        <div className="flex justify-center bg-[#323232] h-screen text-white items-center overflow-auto">
            {/* dalem */}

            <Gallery open={open} setOpen={setOpen} data={modal}></Gallery>

            <div className="flex grid grid-cols-5 gap-x-24">
                <div>
                    <div className="absolute">
                        <button className="peer transition ease-in-out duration-200 hover:scale-110">
                            <span className="tracking-widest">Office</span>
                        </button>

                        <ul className="hidden peer-hover:flex hover:flex flex flex-col peer-hover:h-auto hover:h-auto">
                            {dummyData.map((data) => {
                                return (
                                    <li
                                        className="mt-4 cursor-pointer transition ease-in-out hover:scale-110"
                                        onClick={() => openModal(data)}
                                    >
                                        {data.name}
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
                            {dummyData.map((data) => {
                                return (
                                    <li
                                        className="mt-4 cursor-pointer transition ease-in-out hover:scale-110"
                                        onClick={() => openModal(data)}
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
