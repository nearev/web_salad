import MainNavigation from "./MainNavigation";

export default function Layout(props) {
    return (
        <div className="tracking-widest">
            <MainNavigation />
            <main>{props.children}</main>
        </div>
    );
}
