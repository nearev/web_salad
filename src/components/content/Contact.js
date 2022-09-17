import React from "react";

export default function Contact() {
    return (
        <div className="pt-52 text-center items-center flex justify-center flex-col">
            <h2 className="font-bold text-3xl">CONTACT US</h2>
            <p className="font-semibold mt-10">Gedung Ruko 3</p>
            <p className="font-thin">
                Rukan Taman Meruya<br></br>
                Jl. Batu Mulia No.73, RT.6/RW.7<br></br>
                North Meruya, Kembangan
                <br></br>
                West Jakarta City, Jakarta 11620<br></br>
                (021) 5492012<br></br>
                s.a.l.architecturedesign@gmail.com
            </p>

            {/* Contact form */}
            <form className="mt-12">
                <div className="flex flex-row">
                    <div className="flex flex-col text-right p-3 text-sm">
                        <label htmlFor="name" className="mb-3 p-1">
                            Name
                        </label>
                        <label htmlFor="email" className="mb-3 p-1">
                            Your Email
                        </label>
                        <label htmlFor="message" className="mb-3 p-1">
                            Message/Question
                        </label>
                    </div>
                    <div className="flex flex-col p-3 text-sm">
                        <input
                            className="mb-3 p-1 px-2 w-[40rem] rounded-sm"
                            type="text"
                            id="name"
                            placeholder="Your Name"
                        />
                        <input
                            className="mb-3 p-1 px-2 w-[40rem] rounded-sm"
                            type="text"
                            id="email"
                            placeholder="Your Email"
                        />
                        <textarea
                            className="mb-3 p-1 w-[40rem] px-2 rounded-sm"
                            id="message"
                            placeholder="Your Message"
                        />
                    </div>
                </div>

                {/* Submit button */}
                <button className="my-8 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md w-36">
                    SEND
                </button>
            </form>
        </div>
    );
}
