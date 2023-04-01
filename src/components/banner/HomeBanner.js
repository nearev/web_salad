import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
export default function HomeBanner() {
    // const [currIdx, setCurrIdx] = useState(1);
    // const [style, setStyle] = useState({
    //     backgroundImage: "url(assets/citra.jpg)",
    // });
    // const nextPhoto = () => {
    //     setCurrIdx(currIdx + 1);
    //     setStyle({ ...style, translateX: 100 });
    //     setStyle(backgrounds[currIdx]);
    //     console.log(currIdx);
    // };
    const styles = {
        width: 10 + "px",
        height: 10 + "px",
        borderRadius: 100 + "%",
    };
    const [loaded, setLoaded] = useState(false);
    const [images, setImages] = useState([]);
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = src;
            image.onload = () => {
                resolve(image);
            };
        });
    };

    SwiperCore.use([Navigation, Pagination, Autoplay]);
    useEffect(() => {
        // const img = new Image();
        // img.src = src;
        // img.onload = () => {
        //     setLoaded(true);
        // };
        Promise.all([
            loadImage("assets/Kamen-Rider-drive.png"),
            loadImage("assets/citra.jpg"),
            loadImage("assets/Date_Birth_Profile.jpg"),
        ]).then((value) => {
            console.log(value);
            value.forEach((val) => {
                setImages((prev) => {
                    return [...prev, val];
                });
            });

            setLoaded(true);
        });
    }, []);

    return (
        loaded && (
            // <div
            //     className="relative h-screen w-auto bg-cover bg-center pt-[90px] "
            //     style={styles}
            // >
            //     {/* item */}
            //     <div className="flex relative items-center justify-between h-full w-full z-10 text-white">
            //         <button
            //             className="px-5 opacity-50 carousel-control-prev"
            //             type="button"
            //             data-bs-target="#carouselExampleControls"
            //             data-bs-slide="prev"
            //         >
            //             <ArrowBackIosIcon />
            //         </button>
            //         <img src="assets/LOGO_SALAD.png" />
            //         <button
            //             className="px-5 opacity-50 carousel-control-next"
            //             type="button"
            //             data-bs-target="#carouselExampleControls"
            //             data-bs-slide="next"
            //         >
            //             <ArrowForwardIosIcon />
            //         </button>
            //     </div>
            //     {/* background darken */}
            //     <div className="absolute h-full w-full bg-black opacity-50 top-0 left-0" />
            // </div>

            // <div
            //     id="mycarousel"
            //     className="flex carousel h-full w-full slide relative 2xl:w-[100%] 2xl:h-screen xl:w-auto xl:h-screen lg:h-screen lg:w-auto md:h-screen md:w-auto sm:h-screen sm:w-auto"
            //     data-bs-ride="carousel"
            // >
            //     <ol className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-[100] ">
            //         <li
            //             type="button"
            //             data-bs-target="#mycarousel"
            //             data-bs-slide-to="0"
            //             className="active"
            //             aria-current="true"
            //             style={styles}
            //         ></li>
            //         <li
            //             type="button"
            //             data-bs-target="#mycarousel"
            //             data-bs-slide-to="1"
            //             style={styles}
            //         ></li>
            //         <li
            //             type="button"
            //             data-bs-target="#mycarousel"
            //             data-bs-slide-to="2"
            //             style={styles}
            //         ></li>
            //     </ol>
            //     {/* item */}
            //     <div className="carousel-inner relative w-full h-full overflow-hidden font-['Montserrat'] text-[90px] tracking-wider">
            //         <div className=" carousel-item active relative float-left w-full text-white h-full ">
            //             <img
            //                 // src="assets/Kamen-Rider-drive.png"
            //                 src={images[0].src}
            //                 alt="houseCitra"
            //                 className="absolute w-full object-cover h-full"
            //             />
            //             {/* <div
            //                 style={{
            //                     backgroundImage: `url(assets/${images[0].src})`,
            //                 }}
            //             /> */}

            //             <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
            //                 Citra Home
            //             </span>
            //         </div>
            //         <div className=" carousel-item relative float-left w-full text-white h-full">
            //             <img
            //                 // src="assets/Date_Birth_Profile.jpg"
            //                 src={images[1].src}
            //                 alt="sasa"
            //                 className="absolute h-full w-full object-cover"
            //             />
            //             <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
            //                 Sasa Restaurant
            //             </span>
            //         </div>
            //         <div className=" carousel-item relative float-left w-full text-white h-full">
            //             <img
            //                 // src="assets/kantor.webp"
            //                 src={images[2].src}
            //                 alt="kantor"
            //                 className="absolute h-full w-full object-cover"
            //             />
            //             <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
            //                 Office ABC
            //             </span>
            //         </div>
            //     </div>
            //     {/* background dimmer */}
            //     <div className="absolute h-full w-full bg-black opacity-50 top-0 left-0 flex items-center justify-center pt-[90px]"></div>

            //     <button
            //         className="carousel-control-prev absolute top-[90px] bottom-0  flex items-center justify-around hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 w-20"
            //         data-bs-target="#mycarousel"
            //         data-bs-slide="prev"
            //     >
            //         <ArrowBackIosIcon />
            //     </button>
            //     <button
            //         className="carousel-control-next absolute top-[90px] bottom-0 flex items-center justify-around hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 w-20"
            //         data-bs-target="#mycarousel"
            //         data-bs-slide="next"
            //     >
            //         <ArrowForwardIosIcon />
            //     </button>
            // </div>

            <div className="h-screen text-[90px]">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="w-full h-full"
                    loop
                >
                    <SwiperSlide>
                        <img
                            src={images[0].src}
                            className="absolute w-full object-cover h-full opacity-50"
                        />
                        <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
                            Citra Home
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={images[1].src}
                            className="absolute w-full object-cover h-full opacity-50"
                        />
                        <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
                            Office Abc
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={images[2].src}
                            className="absolute w-full object-cover h-full opacity-50"
                        />
                        <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
                            Gedung Beta
                        </span>
                    </SwiperSlide>
                </Swiper>
                <div className="absolute h-full w-full bg-black opacity-50 top-0 left-0 flex items-center justify-center pt-[90px]"></div>
            </div>
        )
    );
}
