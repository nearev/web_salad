import React from "react";

export default function About() {
    return (
        <div className="pt-52 text-center">
            <h2 className="font-bold text-3xl">CONTACT US</h2>
            <p className="font-semibold mt-10">Gedung Ruko 3</p>
            <p className="font-thin">
                Jl. Kenangan Mantan 21<br></br>
                Puri Kembangan, Kecamatan<br></br>
                Jakarta Barat, Indonesia<br></br>
                (021) 5678901<br></br>
                s.a.l.architecturedesign@gmail.com
            </p>

            {/* Contact form */}
            <form className="mt-10">
                <div className="flex flex-col items-center">
                    <label className="font-semibold text-lg">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-400 rounded-lg" />
                </div>
                <div className="flex flex-col items-center mt-4">
                    <label className="font-semibold text-lg">Email</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-400 rounded-lg" />
                </div>
                <div className="flex flex-col items-center mt-4">
                    <label className="font-semibold text-lg">Message</label>
                    <textarea className="w-full px-4 py-2 border border-gray-400 rounded-lg" />
                </div>
            </form>

        </div>
    );
}