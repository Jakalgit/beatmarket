import style from "@/styles/pages/catalog.module.css"
import Grid from "@/components/Grid";
import {Col} from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import {useEffect, useState} from "react";
import Filters from "@/components/Filters";

const Catalog = () => {

    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState(null);

    const updateVisible = (value) => {
        setVisible(value);
    }

    const updateFilters = (value) => {
        setFilters(value)
    }

    useEffect(() => {
        console.log(filters)
    }, [filters])

    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
        <div className="height">
            <Filters visible={visible} setVisible={(value) => updateVisible(value)} save={filters} setSaveFilters={(value) => updateFilters(value)}/>
            <div className={style.filter_line}>
                <button onClick={() => setVisible(true)} className={style.filter_button}>Фильтры</button>
            </div>
            <div className={style.list}>
                <Grid>
                    {arr.map(() =>
                        <Col xxl={3} xl={3} lg={4} md={4} sm={4} xs={12} className={style.track}>
                            <motion.div className={style.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
                                <div className={style.preview}>
                                    <div className={style.play_block}>
                                        <svg className={style.play} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M366 824q-15 10-30.5 1T320 798V348q0-18 15.5-27t30.5 1l354 226q14 9 14 25t-14 25L366 824Z"/></svg>
                                    </div>
                                    <Image alt="image" src={require("@/img/preview.png")} className={style.preview + ' ' + style.image} />
                                </div>
                                <h1 className={style.name}>OVERHEAVEN (Synthwave) </h1>
                                <Link href="/" className={style.author}>GONE.Fludd</Link>
                                <h2 className={style.price}>от 10 000 ₽</h2>
                            </motion.div>
                        </Col>
                    )}
                </Grid>
            </div>
            <Grid>
                <Pagination />
            </Grid>
        </div>
    );
};

export default Catalog;