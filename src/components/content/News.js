export default function News() {
    return (
        //box luar
        <div className="font-['Lato'] bg-[#323332] text-white w-auto ">
            {/* judul*/}
            <div className="flex-grow mb-auto text-2xl pl-16 py-14">
                <span> NEWS </span>
            </div>
            {/* box dalem (hitam) */}
            <div className="flex justify-center pb-5 px-5">
                {/* box 1 */}
                <div className="md:flex max-w-[1000px] bg-[#292929] md:h-[550px] sm:h-auto w-full rounded-lg">
                    {/* ini gambar */}
                    <div className="flex items-center justify-center md:pl-12">
                        <img
                            src="assets/citra.jpg"
                            alt=""
                            className="md:w-[30rem] md:h-[26rem] w-full h-[26rem] md:rounded-lg rounded-t-lg object-cover"
                        />
                    </div>
                    {/* ini description */}
                    <div className="md:flex items-center md:w-[550px] md:px-12 p-5">
                        <div className="md:h-auto ">
                            <div className="flex relative">
                                <p>
                                    HOUSE CITRA <br /> SALAD Architecture is now
                                    working on this project. The client is Mr X,
                                    where he wanted to build a spacious home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center pb-14">
               
                <div className="flex bg-[#292929] 2xl:w-[1300px] h-[550px] xl:w-[1000px] lg:w-[800px] md:w-[650px] sm:w-[550px] rounded-xl">
                   
                    <div className="flex justify-center items-center w-[550px] h-auto px-12">
                        <div>
                            <div className="flex-relative">
                                <p>
                                    SASA <br /> SALAD Architecture is now
                                    working on this project. The client is Mr X,
                                    where he wanted to build a spacious home.
                                </p>
                            </div>
                            <div>
                                <span className="absolute mt-36 font-light italic">
                                    Read more...
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center w-[750px] pr-12">
                        <img
                            src="assets/sasa.jpg"
                            alt=""
                            className="w-[750px] h-[420px] rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
}
