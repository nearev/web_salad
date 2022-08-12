import MainNavigation from "./MainNavigation";

export default function Layout(props) {
    return (
        <div className="tracking-widest bg-[#323232] h-screen">
            <MainNavigation />
            <main>{props.children}</main>
        </div>
    );
}
