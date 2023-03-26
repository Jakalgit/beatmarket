import style from "@/styles/components/beat.module.css";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Col} from "react-bootstrap";
import {reformatCount} from "@/logic/functions";

const Beat = ({name, author, preview, price}) => {
    return (
        <Col xxl={3} xl={3} lg={4} md={4} sm={4} xs={12} className={style.track}>
            <motion.div className={style.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
                <div className={style.preview}>
                    <div className={style.play_block}>
                        <svg className={style.play} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M366 824q-15 10-30.5 1T320 798V348q0-18 15.5-27t30.5 1l354 226q14 9 14 25t-14 25L366 824Z"/></svg>
                    </div>
                    <Image alt="image" src={require("@/img/preview.png")} className={style.preview + ' ' + style.image} />
                </div>
                <h1 className={style.name}>{name}</h1>
                <Link href="/" className={style.author}>{author}</Link>
                <h2 className={style.price}>от {reformatCount(price)} ₽</h2>
            </motion.div>
        </Col>
    );
};

export default Beat;