import style from "@/styles/components/navbar-large.module.css";
import {Container} from "react-bootstrap";
import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";

const NavbarSmall = () => {

    const [height, setHeight] = useState(30)
    const [filter, setFilter] = useState('blur(0rem)')

    useEffect(() => {
        if (height === window.innerHeight) {
            setFilter('blur(3rem)')
        }
    }, [height])

    return (
        <>
            <div className={style.navbar}>
                <Container>

                </Container>
            </div>
            <div className={style.help} />
        </>
    );
};

export default NavbarSmall;