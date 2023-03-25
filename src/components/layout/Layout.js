import MainNavigation from "./MainNavigation";
import Footer from "../bottombar/Footer";

export default function Layout(props) {
    return (
        <div className="font-['Lato'] tracking-widest leading-relaxed">
            <div className="bg-[#323232] text-white h-auto min-h-screen max-h-[3030px]">
                <MainNavigation />
                <main className="h-auto">{props.children}</main>
            </div>
            <footer className="">
                <Footer />
            </footer>
        </div>
    );
}
