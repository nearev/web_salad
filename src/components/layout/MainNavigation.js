import { Link } from "react-router-dom";
export default function MainNavigation() {
    return (
        <header className="relative w-full bg-[#1A1A1A] text-white opacity-70 h-[90px]">
            <div className="absolute w-[212px] h-[150px] -top-[30px] cursor-pointer">
                <img src="assets/LOGO_SALAD.png" alt="" />
            </div>
            <nav className="flex justify-end px-5 items-center h-full font-['Lato'] font-light italic text-[24px]">
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/">Home</Link>
                </p>
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/projects">Projects</Link>
                </p>
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/contact">Contact</Link>
                </p>
                <p className="px-4 hover:font-bold transition-all duration-200 cursor-pointer">
                    <Link to="/about">About</Link>
                </p>
            </nav>
        </header>
    );
}
