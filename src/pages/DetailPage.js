import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/content/Gallery";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

export default function DetailPage({ dummyData }) {
    const { name, id } = useParams();
    const project = dummyData.type
        .find((data) => data.name === name)
        ?.projects.find((info) => info.id === id);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mainSwiper, setMainSwiper] = useState();

    SwiperCore.use([Navigation, Pagination]);
    const handleSlideClick = (index) => {
        setActiveIndex(index);
        mainSwiper.slideTo(index);
    };
    return (
        <main>
            <div className="top-28 relative px-8 w-full h-auto">
                <div className="flex justify-between">
                    <div className="w-1/5">
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
                        <div className="py-2">
                            <p className="text-justify text-2 font-light">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                    <div className="h-[65vh] w-3/4 rounded-lg">
                        <Swiper
                            slidesPerView={1}
                            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                            onSwiper={(swiper) => setMainSwiper(swiper)}
                            className="w-full h-full"
                        >
                            {project.images.map((image, index) => (
                                <SwiperSlide>
                                    <img
                                        src={image}
                                        className="w-full h-full object-cover rounded-lg"
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
                            className="w-[800px] "
                        >
                            {project.images.map((image, index) => (
                                <SwiperSlide className="pt-5">
                                    <img
                                        src={image}
                                        className={`object-cover rounded-lg h-[100px] ${
                                            index === activeIndex
                                                ? "border-2 border-blue-500 "
                                                : ""
                                        }`}
                                        key={index}
                                        alt={index}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </main>
    );
}
