import MainNavigation from "./MainNavigation";
import Footer from "../bottombar/Footer";

export default function Layout(props) {
    return (
        <div className="font-['Lato'] tracking-widest leading-relaxed">
            <div className="bg-[#323232] text-white min-h-screen h-full">
                <div>
                    <MainNavigation />
                    <div className="h-auto ">{props.children}</div>
                </div>
            </div>
            <footer className="">
                <Footer />
            </footer>
        </div>
    );
}
