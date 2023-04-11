import style from "@/styles/components/player.module.css"
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import Grid from "@/components/Grid";
import Image from "next/image";

const Player = () => {

    const [visible, setVisible] = useState(true)

    const wrapperRef = useRef(null)
    const trackRef = useRef(null)

    const timeClick = (e) => {
        const x = e.pageX
        const width = wrapperRef.current.offsetWidth
        const trackW = (x * 100) / width
        trackRef.current.style.width = trackW + "%"
    }

    return (
        <>
            <div className={style.block} />
            <motion.div
                className={style.block + ' ' + style.player}
                initial={{opacity: 0, x: "-7.5rem"}}
                animate={{
                    opacity: visible ? 1 : 0,
                    x: visible ? 0 : "-7.5rem"
                }}
            >
                <motion.div
                    className={style.wrapper}
                    ref={wrapperRef}
                    onClick={(e) => timeClick(e)}
                >
                    <div
                        className={style.range}
                        ref={trackRef}
                    />
                </motion.div>
                <div className={style.controls}>
                    <Grid>
                        <div className={style.line}>
                            <div className={style.part + ' ' + style.one}>
                                <Image className={style.preview} alt="preview" src={require("@/img/preview.png")} />
                                <div className={style.nameBlock}>
                                    <div className={style.name}>
                                        OVERHEAVEN (Synthware)
                                        <p className={style.bpm}>170 bpm</p>
                                    </div>
                                    <p className={style.author}>
                                        GONE.Fludd
                                    </p>
                                </div>
                            </div>
                            <div className={style.part + ' ' + style.two}>

                            </div>
                            <div className={style.part + ' ' + style.three}>

                            </div>
                        </div>
                    </Grid>
                </div>
            </motion.div>
        </>
    );
};

export default Player;