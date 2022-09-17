import React from "react";

export default function About() {
    return (
        <div className="pt-52 px-32">
            <div className="">
                <p className="text-3xl font-semibold">SALAD ARCHITECTS</p>
            </div>
            <div className="pt-10 flex">
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in consequat sapien. Sed consectetur ullamcorper sagittis. Vestibulum porttitor, dui vitae tincidunt rutrum, nisl leo ullamcorper tellus, nec volutpat sapien arcu id quam. Proin elementum tristique neque, at commodo mi vestibulum ac. Aliquam non lectus nec justo dapibus sodales consequat eu quam. Cras at dignissim sapien. Nunc placerat aliquet viverra. Morbi auctor purus lectus, ut ultrices metus ultrices eu. Integer fermentum, arcu id lobortis hendrerit, ligula lorem hendrerit ante, sit amet vulputate ex ante ac justo. Proin a porttitor magna, ut semper mi. Aliquam mauris neque, mollis id lobortis non, vulputate nec orci. Ut eu commodo nisl, ac consequat nulla. Phasellus vehicula, mi et accumsan malesuada, purus lacus placerat sapien, consectetur dapibus est nunc quis diam. Curabitur vel purus hendrerit, imperdiet orci facilisis, consectetur diam. Praesent sodales auctor tellus. Fusce faucibus, sapien sed elementum dignissim, mauris enim volutpat est, et posuere arcu est iaculis purus.
                        Phasellus vitae arcu ante. Cras et ante gravida, sagittis neque id, eleifend diam. In sed condimentum sem, elementum blandit nunc. Nunc a elit ac lectus elementum gravida sed sed massa. Donec tempor placerat elit vitae vulputate. Mauris pretium congue tortor, sit amet gravida ex imperdiet non. Praesent tempus luctus massa. In laoreet neque leo, eget pharetra nisi porttitor ac.
                        Aliquam hendrerit maximus placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquam nulla, id porta leo elementum sed. Donec quam ipsum, consequat at suscipit vitae, euismod sed est. Vestibulum ultrices commodo felis quis sollicitudin. Donec dapibus, tellus quis lacinia euismod, lectus diam tristique tellus, accumsan accumsan justo elit sit amet arcu. Nunc vitae sagittis tortor. Phasellus eu magna sit amet ante placerat posuere et sit amet nulla. Morbi vitae sapien eleifend, rutrum ipsum eget, venenatis lacus.
                    </p>
                </div>
                <div className="px-10">
                    <p className="font-semibold">Gedung Ruko 3</p>
                    <p>
                        Jl Kenangan Mantan 21
                        Puri Kembangan, Jakarta Barat
                        Indonesia
                        (021) 5492012
                        s.a.l.architecturedesign@gmail.com
                    </p>
                </div>
            </div>

            {/* Images */}
            <div className="py-20">
                <div className="mt-16 justify-center flex text-center">
                    <div className="w-44 h-auto mx-16">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="person" className="rounded-full shadow-lg" />
                        <div className="mt-5 text-xl font-light">
                            <p>Laurel</p>
                            <p>Owner</p>
                            <p className="text-sm">laurel@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-44 h-auto mx-16 text-center">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="person" className="rounded-full shadow-lg" />
                        <div className="mt-5 text-xl font-light">
                            <p>Steve A. S.</p>
                            <p>Owner</p>
                            <p className="text-sm">steveasoes@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-44 h-auto mx-16 text-center">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="person" className="rounded-full shadow-lg" />
                        <div className="mt-5 text-xl font-light text-center">
                            <p>Mawar Bunga</p>
                            <p>Bukan Owner</p>
                            <p className="text-sm">bungamelati@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 justify-center flex">
                    <div className="w-44 h-auto mx-16 text-center">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="person" className="rounded-full shadow-lg" />
                    </div>
                    <div className="w-44 h-auto mx-16 text-center">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="person" className="rounded-full shadow-lg" />
                    </div>
                    <div className="w-44 h-auto mx-16 text-center">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="person" className="rounded-full shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}