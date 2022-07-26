export default function Navbar() {
    return (
        <div className="relative w-full bg-[#1A1A1A] text-white opacity-70 h-[90px]">
            <div className="absolute w-[212px] h-[150px] -top-[30px] cursor-pointer">
                <img src="assets/LOGO_SALAD.png" />
            </div>
            <div className="flex justify-end px-5 items-center h-full font-['Lato'] font-light italic text-[24px]">
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    Home
                </p>
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    Projects
                </p>
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    Contact
                </p>
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    About
                </p>
            </div>
        </div>
    );
}
