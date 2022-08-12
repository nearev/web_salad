import MainNavigation from "./MainNavigation";

export default function Layout(props) {
    return (
        <div className="tracking-widest leading-relaxed bg-[#323232] text-white h-screen">
            <MainNavigation />
            <main>{props.children}</main>
        </div>
    );
}
