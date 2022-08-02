// import classes from "./ProjectsBanner.module.css";
export default function ProjectsBanner() {
    const styles = {
        backgroundImage: "url(assets/citra.jpg)",
    };
    return (
        <div className="w-full h-[1080px] w-auto -top-[100px] z-50">
            <h1 className="text-white font-semibold uppercase text-[144px] tracking-[25px] bg-black">
                PROJECTS
            </h1>
        </div>
    );
}
