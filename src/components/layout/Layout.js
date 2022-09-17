import MainNavigation from "./MainNavigation";
import Footer from "../bottombar/Footer";

export default function Layout(props) {
    return (
        <div className="font-['Lato'] tracking-widest leading-relaxed">
            <div className="bg-[#323232] text-white h-fit min-h-screen">
                <MainNavigation />
                <main>{props.children}</main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
