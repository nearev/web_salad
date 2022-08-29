import classes from "./Gallery.module.css";
export default function Gallery(props) {
    // const [dismiss, setDismiss] = useState();
    function dismissModal() {
        props.setOpen(false);
    }
    return (
        <div>
            {props.open && (
                <div className="bg-black w-24 flex items-center justify-center">
                    <div>{props.children}</div>

                    <button onClick={dismissModal}>Close modal</button>
                </div>
            )}
        </div>
    );
}
