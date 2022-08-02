import Footer from "../components/bottombar/Footer";
import FooterContact from "../components/bottombar/FooterContact";

import HomeBanner from "../components/banner/HomeBanner";
import FeaturedProjects from "../components/content/FeaturedProjects";
export default function Home() {
    return (
        <div className="tracking-widest">
            <header>
                <HomeBanner />
                <FeaturedProjects />
            </header>
            <footer>
                <FooterContact />
                <Footer />
            </footer>
        </div>
    );
}
