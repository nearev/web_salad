import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function HomeBanner() {
    // const backgrounds = [
    //     {
    //         backgroundImage: "url(assets/citra.jpg)",
    //     },
    //     {
    //         backgroundImage: "url(assets/sasa.jpg)",
    //     },
    // ];
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
    return (
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

        <div
            id="carouselExampleControls"
            className="flex carousel h-screen w-auto slide relative"
            data-bs-ride="carousel"
        >
            {/* item */}
            <div className="carousel-inner relative w-full h-full overflow-hidden font-['Montserrat'] text-[100px] tracking-wider">
                <div className=" carousel-item active relative float-left w-full text-white h-full ">
                    <img
                        src="assets/citra.jpg"
                        alt="houseCitra"
                        className="absolute"
                    />

                    <span className="absolute bottom-0 left-5 z-50 ">
                        Citra Home
                    </span>
                </div>
                <div className=" carousel-item relative float-left w-full text-white h-full">
                    <img
                        src="assets/sasa.jpg"
                        alt="sasa"
                        className="absolute"
                    />
                    <span className="absolute bottom-0 left-5 z-50">
                        Sasa Restaurant
                    </span>
                </div>
                <div className=" carousel-item relative float-left w-full text-white h-full">
                    <img
                        src="assets/kantor.jpg"
                        alt="kantor"
                        className="absolute"
                    />
                    <span className="absolute bottom-0 left-5 z-50">
                        Office ABC
                    </span>
                </div>
            </div>
            {/* background dimmer */}
            <div className="absolute h-full w-full bg-black opacity-50 top-0 left-0 flex items-center justify-center pt-[90px]"></div>

            <button
                class="carousel-control-prev absolute top-[90px] bottom-0  flex items-center justify-around hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 w-20"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <ArrowBackIosIcon />
            </button>
            <button
                class="carousel-control-next absolute top-[90px] bottom-0 flex items-center justify-around hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 w-20"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <ArrowForwardIosIcon />
            </button>
        </div>
    );
}
