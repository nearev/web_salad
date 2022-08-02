import Footer from "../components/bottombar/Footer";
import FooterContact from "../components/bottombar/FooterContact";

import Banner from "../components/banner/Banner";
import FeaturedProjects from "../components/content/FeaturedProjects";
export default function Home() {
    return (
        <div className="App tracking-widest">
            <header>
                <Banner className="z-0" />
                <FeaturedProjects />
            </header>
            <footer>
                <FooterContact />
                <Footer />
            </footer>
        </div>
    );
}
