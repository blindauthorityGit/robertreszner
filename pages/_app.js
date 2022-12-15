import "../styles/globals.css";
import "../styles/animations.css";
import MasterContainer from "../components/layout/masterContainer";
import Navbar from "../components/Nav";
import Footer from "../components/footer";
import { MenuItems, HomeLink, MenuItemsLower } from "../config";

function MyApp({ Component, pageProps }) {
    return (
        <MasterContainer klasse="w-full">
            <Navbar HomeLink={HomeLink} MenuItemsLower={MenuItemsLower} MenuItems={MenuItems} colSpan="col-span-3" />

            <Component className="bubu" {...pageProps} style={{ paddingBottom: "2rem" }} />

            <Footer
                insta="https://www.instagram.com/evamariaschartmueller/"
                twitter="https://twitter.com/SchartmuellerM"
            ></Footer>
        </MasterContainer>
    );
}

export default MyApp;
