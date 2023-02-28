import '@/styles/globals.css'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import {useState} from "react";

export default function App({ Component, pageProps }) {

    const [menuLeft, setMenuLeft] = useState('-100%')

    const changeMenuLeft = (value) => {
        setMenuLeft(value)
    }

    return (
        <>
            <Menu menuLeft={menuLeft} setMenuLeft={(value) => changeMenuLeft(value)}/>
            <Navbar setMenuLeft={(value) => changeMenuLeft(value)} />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
