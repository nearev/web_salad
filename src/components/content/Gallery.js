import classes from "./Gallery.module.css";
import CloseIcon from "@mui/icons-material/Close";
export default function Gallery(props) {
    function dismissModal() {
        props.setOpen(false);
    }
    return (
        <>
            {/* ini punya axell */}
            {/* {props.open && (
                <div className="w-[100%] h-[100%]">
                    <div className="top-8 right-8 left-8 bottom-8 p-7 bg-[#272727] h-[800px] w-[90vw] ">
                        <div>{props.children}</div>
                        <button onClick={dismissModal}>Close Modal</button>
                    </div>
                </div>
            )} */}
            {props.open && (
                <div className="flex justify-center items-center top-0 left-0 fixed w-[100%] h-[100%] z-40">
                    <div className="p-7 bg-[#272727] h-[90vh] w-[90vw] z-50 rounded-lg opacity-90">
                        <div className="flex justify-end">
                            <button onClick={dismissModal} className="absolute">
                                <CloseIcon />
                            </button>
                        </div>
                        {/* Gambar Utama */}
                        <div className="flex justify-center">
                            <img
                                src={props.data.image}
                                alt={props.data.name}
                                className="w-7/12 h-[50vh] rounded-lg mb-4 drop-shadow-xl"
                            />
                        </div>
                        <div className="flex w-full justify-center mt-2">
                            <img
                                src="https://images.thewest.com.au/publication/C-5745817/8d96b1d05907df391f76a15e1ef1708093e87a6e-4x3-x121y0w1937h1453.jpg"
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                            <img
                                src={props.data.image}
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                            <img
                                src={props.data.image}
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                            <img
                                src={props.data.image}
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                            <img
                                src={props.data.image}
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                            <img
                                src={props.data.image}
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                            <img
                                src={props.data.image}
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                            <img
                                src={props.data.image}
                                className="w-1/12 h-1/12 mx-4 rounded-lg"
                            />
                        </div>
                        {/* Box gede */}
                        <div className="flex p-5">
                            {/* Box Kiri */}
                            <div className="w-2/3">
                                <span className="text-[24px] drop-shadow-xl">
                                    {props.data.name}
                                </span>
                                <br></br>
                                <span>{props.data.category}, </span>
                                <span className="italic font-light">
                                    {props.data.status}
                                </span>
                                <div>
                                    <span className="text-[12px] text-justify ">
                                        {props.data.desc}
                                    </span>
                                </div>
                            </div>
                            {/* Box kanan */}
                            <div className="pl-24 text-[12px] leading-9 font-light">
                                <p>Program: Abcs daslk</p>
                                <p>Size: 10m</p>
                                <p>Location: Permata Buana</p>
                                <p>Client: Mr Budi</p>
                                <p>Contractor: Jason Andrea</p>
                            </div>
                        </div>
                        {/* <div>{props.children}</div> */}
                    </div>
                    <div className="flex justify-center items-center top-0 left-0 absolute w-[100%] h-[100%] brightness-75 opacity-80 z-40 bg-black"></div>
                </div>
            )}
        </>
    );
}
