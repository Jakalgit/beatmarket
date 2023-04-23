import style_tab from "@/styles/pages/profile.module.css";
import {motion} from "framer-motion";
import style_pr from "@/styles/components/profile_purchases.module.css";
import style from "@/styles/components/profile_confirmations.module.css"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";


const ProfileConfirmations = ({layoutHeight}) => {

    const [listHeight, setListHeight] = useState(0)

    const confirmationRef = useRef(null)

    useEffect(() => {
        if (confirmationRef) {
            const orderHeight = confirmationRef.current.getBoundingClientRect().height;
            let count = Math.trunc(layoutHeight / orderHeight)
            if (count < 1) count = 1
            setListHeight(count * orderHeight - 2)
        }
    }, [confirmationRef])

    return (
        <motion.div
            style={{justifyContent: "center"}}
            className={style_tab.layout}
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
        >
            <div
                style={{maxHeight: listHeight}}
                className={style_pr.orderList}
            >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() =>
                    <motion.div
                        ref={confirmationRef}
                        className={style_pr.order + ' ' + style.order}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                    >
                        <div className={style.line + ' ' + style.up}>
                            <h1 className={style_pr.name}>Подтверждение №123124</h1>
                            <p className={style.time}>21 : 34 : 12</p>
                        </div>
                        <div className={style.line}>
                            <Image src={require("@/img/preview.png")} alt="preview" className={style.preview} />
                            <div className={style_pr.nameBlock}>
                                <p className={style.name}>
                                    OVERHEAVEN (Synthwave)
                                </p>
                                <p className={style.bpm}>170 bpm</p>
                                <p className={style.license}>Безлимитная аренда (MP3 + WAV + TrackOut)</p>
                            </div>
                            <p className={style_pr.name + ' ' + style_pr.price}>30 000 ₽</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default ProfileConfirmations;