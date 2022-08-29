import classes from "./Gallery.module.css";
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
                <div className="flex justify-center items-center top-0 left-0 fixed w-[100%] h-[100%] z-40 ">
                    <div className="relative p-7 bg-[#272727] h-[90vh] w-[90vw] z-50 rounded-lg">
                        <div>{props.children}</div>
                        <button onClick={dismissModal}>Close Modal</button>
                        <div>{props.data.desc}</div>
                        <img src={props.data.image} alt={props.data.name} />
                    </div>
                    <div className="flex justify-center items-center top-0 left-0 absolute w-[100%] h-[100%] brightness-75 opacity-80 z-40 bg-black"></div>
                </div>
            )}
        </>
    );
}
