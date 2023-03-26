import style_beat from "@/styles/components/beat.module.css"
import style from "@/styles/components/creator.module.css"
import {Col} from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import {reformatCount} from "@/logic/functions";

const Creator = ({name, starCount, preview}) => {
    return (
        <Col xxl={3} xl={3} lg={4} md={4} sm={4} xs={12} className={style_beat.track}>
            <motion.div className={style_beat.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
                <Image alt="image" src="" className={style.preview} />
                <h1 className={style.name}>{name}</h1>
                <div className={style.stars}>
                    <Image src={require("@/img/star.png")} alt="star" className={style.star} />
                    <Image src={require("@/img/star.png")} alt="star" className={style.star} />
                    <Image src={require("@/img/star.png")} alt="star" className={style.star} />
                    <Image src={require("@/img/star.png")} alt="star" className={style.star} />
                    <Image src={require("@/img/star.png")} alt="star" className={style.star} />
                </div>
                <p className={style.count}>{reformatCount(starCount)}</p>
            </motion.div>
        </Col>
    );
};

export default Creator;