import Footer from "../components/bottombar/Footer";
import FooterContact from "../components/bottombar/FooterContact";

import HomeBanner from "../components/banner/HomeBanner";
import News from "../components/content/News";
export default function Home() {
    return (
        <main>
            <header className="w-full">
                <HomeBanner />
                <News />
            </header>
            <FooterContact />
        </main>
    );
}
