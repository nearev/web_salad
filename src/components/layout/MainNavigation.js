import { Link } from "react-router-dom";
export default function MainNavigation() {
    return (
        <header className="absolute w-full text-white h-[90px] z-10">
            {/* Logo + kalo udh ganti logo, -top30 direvisi lagi*/}
            <div className="absolute w-[212px] h-[150px] -top-[30px] cursor-pointer z-20">
                <img src="assets/LOGO_SALAD.png" alt="" />
            </div>
            {/* Links / Navbar */}
            <nav className="flex relative justify-end px-5 items-center h-full font-['Lato'] font-light italic text-[20px] z-20">
                <span className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/">Home</Link>
                </span>
                <span className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/projects">Projects</Link>
                </span>
                <span className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/contact">Contact</Link>
                </span>
                <span className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/about">About</Link>
                </span>
            </nav>
            {/* darken background */}
            <div className="absolute h-full w-full bg-[#1A1A1A] opacity-0 top-0 left-0 z-10" />
        </header>
    );
}
