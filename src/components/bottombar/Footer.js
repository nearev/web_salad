import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Footer() {
    return (
        // <footer className="relative flex bg-[#595959] text-white h-[140px] w-auto ">
        //     <div className="flex font-['Lato'] items-center px-5 h-full ">
        //         <span>COPYRIGHT© SALAD</span>
        //     </div>
        //     <div className="flex justify-end items-center">
        //         <InstagramIcon />
        //         <WhatsAppIcon />
        //     </div>
        // </footer>
        <footer className="flex justify-between w-full bg-[#595959] text-white font-['Lato']  h-[70px] items-center  text-xm ">
            <span className="p-5 opacity-70">COPYRIGHT© SALAD</span>

            <div className="flex p-5 opacity-70">
                <InstagramIcon className="mr-2" />
                <WhatsAppIcon />
            </div>
        </footer>

        // <footer class="p-4 md:flex md:items-center md:justify-between md:p-6 bg-[#595959] ">
        //     <span class="text-sm text-white sm:text-center font-['Lato'] text-[24px] opacity-70 p-2">
        //         © 2022 SALAD. All Rights Reserved.
        //     </span>
        //     <ul class="flex flex-wrap items-center mt-3 text-white sm:mt-0 opacity-70 p-2">
        //         <li className="pr-2">
        //             <InstagramIcon />
        //         </li>
        //         <li>
        //             <WhatsAppIcon />
        //         </li>
        //     </ul>
        // </footer>
    );
}
