import React from "react";

export default function FooterContact() {
    return (
        <div className="w-full h-auto bg-neutral-700">
            <div className="pl-16 pt-14 pb-20 font-['Lato']">
                <p className="text-white font-medium text-xl mb-3">SALAD</p>
                <p className="text-white font-semibold text-base">CONTACT</p>
                <p className="text-white font-light text-base">
                    {/* Jl Kenangan Mantan 21, Jakarta Barat<br></br>
                    (021) 5492012<br></br>
                    s.a.l.architecturedesign@gmail.com */}
                    Rukan Taman Meruya, <br />
                    Jl. Batu Mulia No.73, RT.6/RW.7,
                    <br /> North Meruya, Kembangan, West Jakarta City, Jakarta
                    11620
                    <br />
                    (021) 5492012
                    <br />
                    s.a.l.architecturedesign@gmail.com
                </p>
            </div>
        </div>
    );
}
