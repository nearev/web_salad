import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Banner() {
    const styles = {
        height: 32 + "rem",
    };
    return (
        <div className="w-full bg-cover bg-center" style={styles}>
            <div class="flex items-center justify-between h-full w-full bg-gray-900 bg-opacity-50">
                <button className="px-5 opacity-50">
                    <ArrowBackIosIcon />
                </button>
                <button className="px-5 opacity-50">
                    <ArrowForwardIosIcon />
                </button>

                {/* <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
                    <span class="underline text-blue-400"></span>
                </h1>
            </div> */}
            </div>
        </div>
    );
}
