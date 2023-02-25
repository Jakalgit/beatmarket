import style from "@/styles/components/navbar.module.css"
import {Col, Container, Row} from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import {useState} from "react";

const NavbarLarge = () => {

    const [openFind, setOpenFind] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const [finderOpacity, setFinderOpacity] = useState(0)

    const openFinder = () => {
        setOpacity(0)
        setTimeout(() => {
            setOpenFind(true)
            setFinderOpacity(1)
        }, 300)
    }

    const closeFinder = () => {
        setFinderOpacity(0)
        setTimeout(() => {
            setOpenFind(false)
            setOpacity(1)
        }, 300)
    }

    return (
        <>
            <div className={style.navbar}>
                <Container>
                    {openFind ?
                        <motion.div animate={{opacity: finderOpacity}} className={style.row}>
                            <svg className={style.find_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M774 913 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l243 241q9 8.442 9 20.721t-9.913 22.192Q809 922 795.778 922q-13.222 0-21.778-9ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg>
                            <input className={style.find_line} type="text" placeholder="Поиск битов или создателей..."/>
                            <svg className={style.find_svg} onClick={closeFinder} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 618 270 828q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522 576l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480 618Z"/></svg>
                        </motion.div>
                        :
                        <motion.div animate={{opacity}} className={style.row}>
                            <Link href={"/"} className={style.href + ' ' + style.logo}>BeatMarket</Link>
                            <Link href={"/"} className={style.href}>Популярное</Link>
                            <Link href={"/"} className={style.href}>Каталог</Link>
                            <Link href={"/"} className={style.href}>Сообщения</Link>
                            <Link href={"/"} className={style.href}>Поддержка</Link>
                            <Link href={"/"} className={style.href}>Стать создателем</Link>
                            <div className={style.btn}>
                                <svg onClick={openFinder} className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M774 913 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l243 241q9 8.442 9 20.721t-9.913 22.192Q809 922 795.778 922q-13.222 0-21.778-9ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg>
                                <svg className={style.svg + ' ' + style.right_ico} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M222 801q63-40 124.5-60.5T480 720q72 0 134 20.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142 804 111 731.159 80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.5q-54 54.5-127.129 86T479.595 976Z"/></svg>
                            </div>
                        </motion.div>
                    }
                </Container>
            </div>
            <div className={style.help} />
        </>
    );
};

export default NavbarLarge;