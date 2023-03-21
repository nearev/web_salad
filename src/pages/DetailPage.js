import React from "react";
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
    SwiperCore.use([Navigation, Pagination]);

    return (
        <main>
            {/* <Gallery project={project} /> */}
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
                    <div className="h-[80vh] w-3/4 rounded-lg">
                        {/* <img
                            src="https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149"
                            className="w-full h-5/6 object-cover rounded-t-lg"
                        /> */}
                        <Swiper
                            spaceBetween={60}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log("slide change")}
                            className="w-full h-full"
                        >
                            <SwiperSlide>
                                <img
                                    src="https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149"
                                    className="w-full h-5/6 object-cover rounded-t-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </main>
    );
}
