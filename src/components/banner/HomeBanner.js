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
        Promise.all([
            loadImage("assets/CYBER_FORENSIC_compressed/2.webp"),
            loadImage("assets/DOUBLE_JO_KITCHEN_compressed/1.webp"),
            loadImage("assets/kantor.webp"),
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
                    <SwiperSlide >
                        <img
                            src={images[0].src}
                            className="absolute w-full object-cover h-full opacity-50"
                            loading="lazy"
                        />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
                            Citra Home
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={images[1].src}
                            className="absolute w-full object-cover h-full opacity-50"
                            loading="lazy"
                        />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        <span className="absolute bottom-0 left-5 z-50 opacity-80 pb-4">
                            Office Abc
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={images[2].src}
                            className="absolute w-full object-cover h-full opacity-50"
                            loading="lazy"
                        />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
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
