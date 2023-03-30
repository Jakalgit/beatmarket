import "@/styles/globals.css"
import "@/styles/animation.css"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import {useState} from "react";
import Notification from "@/components/Notifications/Notification";

export default function App({ Component, pageProps }) {

    const [menuLeft, setMenuLeft] = useState('-100%')

    const changeMenuLeft = (value) => {
        setMenuLeft(value)
    }

    return (
        <>
            <Menu menuLeft={menuLeft} setMenuLeft={(value) => changeMenuLeft(value)}/>
            <Notification />
            <Navbar setMenuLeft={(value) => changeMenuLeft(value)} />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
