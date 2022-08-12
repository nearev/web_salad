import React from "react";

export default function About() {
    return (
        <div className="pt-52 text-center items-center flex justify-center flex-col">
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
                <div className="flex flex-row">
                    <div className="flex flex-col text-right p-3">
                        <label htmlFor="name" className="mb-3 p-1">Name</label>
                        <label htmlFor="email" className="mb-3 p-1">Your Email</label>
                        <label htmlFor="message" className="mb-3 p-1">Message/Question</label>
                    </div>
                    <div className="flex flex-col p-3">
                        <input  className="mb-3 p-1 w-96 rounded-sm" type="text" id="name" placeholder="Your Name" />
                        <input  className="mb-3 p-1 w-96 rounded-sm" type="text" id="email" placeholder="Your Email" />
                        <textarea className="mb-3 p-1 w-96 rounded-sm" id="message" placeholder="Your Message" />
                    </div>
                </div>
            </form>

        </div>
    );
}