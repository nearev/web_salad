import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function HomeBanner() {
    const styles = {
        backgroundImage: "url(assets/citra.jpg)",
    };
    return (
        <div>
            <div
                className="relative h-screen w-auto bg-cover bg-center pt-[90px]"
                style={styles}
            >
                {/* item */}
                <div className="flex relative items-center justify-between h-full w-full z-10">
                    <button className="px-5 opacity-50 ">
                        <ArrowBackIosIcon />
                    </button>
                    <img src="assets/LOGO_SALAD.png" />
                    <button className="px-5 opacity-50 ">
                        <ArrowForwardIosIcon />
                    </button>
                </div>
                <div className="absolute h-full w-full bg-black opacity-50 top-0 left-0" />
            </div>
        </div>
    );
}
