import { Link } from "react-router-dom";
export default function MainNavigation() {
    return (
        <header className="absolute w-full bg-[#1A1A1A] text-white opacity-70 h-[90px] z-10">
            {/* Logo */}
            <div className="absolute w-[212px] h-[150px] -top-[30px] cursor-pointer">
                <img src="assets/LOGO_SALAD.png" alt="" />
            </div>
            {/* Links / Navbar */}
            <nav className="flex justify-end px-5 items-center h-full font-['Lato'] font-light italic text-[20px]">
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
        </header>
    );
}
