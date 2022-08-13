import MainNavigation from "./MainNavigation";
import Footer from "../bottombar/Footer";

export default function Layout(props) {
    return (
        <div className="font-['Lato'] tracking-widest leading-relaxed bg-[#323232] text-white h-screen">
            <MainNavigation />
            <main>{props.children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
