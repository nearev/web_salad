export default function AllProjects() {
    return (
        //box paling luar
        <div className="flex justify-center bg-[#323232] h-screen text-white items-center">
            {/* dalem */}
            <div className="flex absolute grid grid-cols-5 gap-x-24 text-center ">
                <div>Office</div>
                <div>House</div>
                <div>Commercial</div>
                <div>Hospital</div>
                <div>Interior</div>
            </div>
        </div>
    );
}
