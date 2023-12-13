import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
            <AnimatePresence>
            <motion.nav  className={`flex relative justify-end px-5 items-center h-full font-['Lato'] font-light italic text-[18px] z-10 `}>
                <div className="md:hidden ">
                    <Hamburger toggled={open} toggle={toggleMenu} />                   
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
                        <motion.div
                        initial={{ opacity: 0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration: 0.3}}
                        
                        className={`fixed top-[5.5rem] right-0 w-full shadow-xl flex justify-center  rounded-b-lg`}
                    >
                        <ul className="text-2xl font-bold text-white">
                            <motion.li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/">Home</Link>
                            </motion.li>
                            <motion.li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/projects">Projects</Link>
                            </motion.li>
                            <motion.li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/contact">Contact</Link>
                            </motion.li>
                            <motion.li className="mb-8 hover:font-bold transition-all duration-200 cursor-pointer" onClick={closeMenu}>
                                <Link to="/about">About</Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                    )}
                
            </motion.nav>
            </AnimatePresence>
            {/* darken background */}
            <div className="absolute h-full w-full bg-[#1A1A1A] opacity-0 top-0 left-0" />
        </div>
    );
}
