import style from "@/styles/components/profile_purchases.module.css"
import style_tab from "@/styles/pages/profile.module.css";
import global from "@/styles/global.module.css"
import {motion} from "framer-motion";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const ProfilePurchases = ({layoutHeight}) => {

    const [listHeight, setListHeight] = useState(0)

    const orderRef = useRef(null)

    useEffect(() => {
        if (orderRef) {
            const orderHeight = orderRef.current.getBoundingClientRect().height;
            let count = Math.trunc(layoutHeight / orderHeight)
            if (count < 1) count = 1
            setListHeight(count * orderHeight - 2)
        }
    }, [orderRef])

    return (
        <motion.div
            style={{justifyContent: "center"}}
            className={style_tab.layout}
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
        >
            <div
                style={{maxHeight: listHeight}}
                className={style.orderList}
            >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() =>
                    <motion.div
                        ref={orderRef}
                        className={style.order}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                    >
                        <Image src={require("@/img/preview.png")} alt="preview" className={style.preview} />
                        <div className={style.nameBlock}>
                            <h1 className={style.name}>OVERHEAVEN (Synthwave) </h1>
                            <p className={style.bpm}>170 bpm</p>
                            <p className={style.license}>Безлимитная аренда (MP3 + WAV + TrackOut)</p>
                        </div>
                        <div className={style.right}>
                            <p className={style.author + ' ' + global.underline}>
                                GONE.Fludd
                            </p>
                            <p className={style.name + ' ' + style.price}>
                                30 000 ₽
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default ProfilePurchases;