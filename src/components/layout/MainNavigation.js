import { useState } from "react";
import { Link } from "react-router-dom";
export default function MainNavigation() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    }
    return (
        <div className="absolute w-full text-white h-[90px]">
            <div className="absolute cursor-pointer z-30 ml-7 mt-2" onClick={closeMenu}>
                <Link to="/">
                    <img
                        src="assets/LOGO_WHITE_REMOVED.png"
                        alt=""
                        className="w-[75px] h-[75px]"
                    />
                </Link>
            </div>
            {/* Links / Navbar */}
            <nav className="flex relative justify-end px-5 items-center h-full font-['Lato'] font-light italic text-[18px] z-20">
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                        </svg>
                    </button>
                </div>
                
                <div className="md:block hidden">
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
                </div>

                {open && (
                    <div
                    className={`fixed top-0 right-0 w-full h-full bg-zinc-900 opacity-95 flex flex-col justify-center items-center z-50 transition-transform duration-300 ${
                      open ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  >
                        <button
                        onClick={closeMenu}
                        className="absolute top-5 right-3 text-white text-2xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <ul className="text-2xl font-bold text-white">
                            <li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                  </div>
                )}
                
            </nav>
            {/* darken background */}
            <div className="absolute h-full w-full bg-[#1A1A1A] opacity-0 top-0 left-0" />
        </div>
    );
}
