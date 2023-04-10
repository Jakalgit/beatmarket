import style from "@/styles/components/player.module.css"
import {motion} from "framer-motion";
import {useState} from "react";

const Player = () => {

    const [visible, setVisible] = useState(true)

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
                <div className={style.wrapper}>
                    <input
                        className={style.range}
                        type="range"
                        min={0}
                        max={200}
                    />
                </div>
            </motion.div>
        </>
    );
};

export default Player;