import { motion } from "framer-motion";
import style from "@/styles/components/menu.module.css";
import navbar_style from "@/styles/components/navbar.module.css"
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import {CATALOG} from "@/utils/routes";

const Menu = ({menuLeft, setMenuLeft}) => {

    const closeMenu = () => {
        setMenuLeft('-100%')
    }

    return (
        <motion.div className={style.menu_block} animate={{left: menuLeft}} transition={{duration: 0.5}}>
            <Container>
                <Row>
                    <Col className={style.line} sm={12} xs={12}>
                        <Link style={{display: "inline-block"}} onClick={closeMenu}
                              href={"/"} className={navbar_style.href + ' ' + navbar_style.logo}>BeatMarket</Link>
                        <svg onClick={closeMenu} className={navbar_style.svg} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m536.13 796.87-198-198q-5.478-5.479-7.837-11.316-2.358-5.837-2.358-12.554 0-6.717 2.358-12.554 2.359-5.837 7.837-11.316l199-199q10.196-10.195 24.37-10.195 14.174 0 24.37 10.195 10.195 10.196 9.695 24.87-.5 14.674-10.695 24.87L411.739 575 585.87 749.13q10.195 10.196 10.195 23.87 0 13.674-10.195 23.87-10.196 10.195-24.87 10.195-14.674 0-24.87-10.195Z"/></svg>
                    </Col>
                </Row>
            </Container>
            <div className={style.href_block}>
                <Link href={"/"} onClick={closeMenu} className={navbar_style.href + ' '+ style.href_margin}>Популярное</Link>
            </div>
            <div className={style.href_block}>
                <Link href={CATALOG} onClick={closeMenu} className={navbar_style.href + ' '+ style.href_margin}>Каталог</Link>
            </div>
            <div className={style.href_block}>
                <Link href={"/"} onClick={closeMenu} className={navbar_style.href + ' '+ style.href_margin}>Сообщения</Link>
            </div>
            <div className={style.href_block}>
                <Link href={"/"} onClick={closeMenu} className={navbar_style.href + ' '+ style.href_margin}>Поддержка</Link>
            </div>
            <div className={style.href_block}>
                <Link href={"/"} onClick={closeMenu} className={navbar_style.href + ' '+ style.href_margin}>Стать создателем</Link>
            </div>
        </motion.div>
    );
};

export default Menu;