export default function FeaturedProjects() {
    return (
        //box luar
        <div className="font-['Lato'] bg-[#323332] text-white ">
            {/* judul*/}
            <div className="flex-grow mb-auto text-2xl pl-16 py-14">
                <span> FEATURED PROJECTS </span>
            </div>
            {/* box dalem (hitam) */}
            <div className="flex justify-center pb-5">
                {/* box 1 */}
                <div className="flex bg-[#292929] w-[1300px] h-[550px] rounded-xl">
                    {/* ini gambar */}
                    <div className="flex items-center justify-center w-[750px] pl-12">
                        <img
                            src="assets/citra.jpg"
                            alt=""
                            className="w-[750px] h-[420px] rounded-lg"
                        />
                    </div>
                    {/* ini description */}
                    <div className="flex justify-center items-center w-[550px] h-auto px-12">
                        <p>
                            HOUSE CITRA <br /> SALAD Architecture is now working
                            on this project. The client is Mr X, where he wanted
                            to build a spacious home.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-14">
                {/* box 2 */}
                <div className="flex bg-[#292929] w-[1300px] h-[550px] rounded-xl">
                    {/* ini description */}
                    <div className="flex justify-center items-center w-[550px] h-auto px-12">
                        <p>
                            SASA <br /> SALAD Architecture is now working on
                            this project. The client is Mr X, where he wanted to
                            build a spacious home.
                        </p>
                    </div>
                    {/* ini gambar */}
                    <div className="flex items-center justify-center w-[750px] pr-12">
                        <img
                            src="assets/sasa.jpg"
                            alt=""
                            className="w-[750px] h-[420px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
