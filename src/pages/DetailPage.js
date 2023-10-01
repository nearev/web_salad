import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/content/Gallery";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";

export default function DetailPage({ dummyData }) {
    const { name, id } = useParams();
    const project = dummyData.type
        .find((data) => data.name === name)
        ?.projects.find((info) => info.id === id);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mainSwiper, setMainSwiper] = useState();

    SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);
    const handleSlideClick = (index) => {
        setActiveIndex(index);
        mainSwiper.slideTo(index);
    };
    return (
        <main>
            <div className="pt-28 relative px-8 w-full h-auto">
                <div className="md:flex justify-between">
                    <div className="md:h-[65vh] min-[320px]:h-[55vh] w-full md:w-3/4">
                            <Swiper
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={15}
                                slidesPerView={1}
                                onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                                onSwiper={(swiper) => setMainSwiper(swiper)}
                                className="w-full md:h-full  rounded-lg"
                            >
                                {project.images.map((image, index) => (
                                    <SwiperSlide>
                                        <img
                                            src={image}
                                            className="w-full h-full  object-cover rounded-lg"
                                            key={index}
                                            alt={index}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            
                            <Swiper
                                spaceBetween={10}
                                autoHeight={true}
                                slidesPerView={5}
                                onClick={(e) => handleSlideClick(e.clickedIndex)}
                                className="max-w-[36rem] md:w-full min-[320px]:max-w-[20rem] "
                                scrollbar={{
                                    hide: true,
                                }}
                                modules={[Scrollbar]}
                            >
                                {project.images.map((image, index) => (
                                    <SwiperSlide className="pt-5">
                                        <img
                                            src={image}
                                            className={`object-cover rounded-lg h-[100px] ${
                                                index === activeIndex ? "" : ""
                                            }`}
                                            key={index}
                                            alt={index}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                        </div>
                        <div className="md:w-1/5">
                            <span className="text-2xl font-bold">
                                {project.name}
                            </span>
                            <div>
                                <span className="font-semibold">
                                    {project.category}
                                </span>
                                ,{" "}
                                <span className="italic font-normal">
                                    {project.status}
                                </span>
                            </div>
                            <div className="py-2 h-auto">
                                <p className="text-justify md:text-base min-[320px]:text-xs font-light break-words">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </main>
    );
}
