import MainNavigation from "./MainNavigation";
import Footer from "../bottombar/Footer";

export default function Layout(props) {
    return (
        <div className="tracking-widest leading-relaxed bg-[#323232] text-white h-screen">
            <MainNavigation />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}
