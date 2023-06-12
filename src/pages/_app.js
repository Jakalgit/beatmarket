import "@/styles/globals.css"
import "@/styles/animation.css"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import {useState} from "react";
import Notifications from "@/components/Notifications";
import {wrapper} from "@/store";
import AppWrapper from "@/components/AppWrapper";
import Player from "@/components/Player";
import {init} from "@/http/api/authApi";

function App({ Component, pageProps }) {

    const [menuLeft, setMenuLeft] = useState('-100%')

    const changeMenuLeft = (value) => {
        setMenuLeft(value)
    }

    init()

    return (
        <>
            <Menu menuLeft={menuLeft} setMenuLeft={(value) => changeMenuLeft(value)}/>
            <Notifications />
            <Navbar setMenuLeft={(value) => changeMenuLeft(value)} />
            <AppWrapper Component={Component} pageProps={pageProps} />
            <Footer />
            <Player />
        </>
    )
}

export default wrapper.withRedux(App)
