import MainNavigation from "./MainNavigation";
import Footer from "../bottombar/Footer";
import { useState } from "react";

export default function Layout(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="font-['Lato'] tracking-widest leading-relaxed">
            <div className={` bg-[#323232] text-white min-h-screen h-full`}>
                <div>
                    <MainNavigation setOpen={setOpen} open={open}/>
                    <div className="h-auto ">{props.children}</div>
                </div>
            </div>
            <footer className="">
                <Footer />
            </footer>
        </div>
    );
}
