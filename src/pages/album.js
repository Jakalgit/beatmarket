import {motion} from "framer-motion";
import style from "@/styles/pages/album.module.css"
import style_fb from "@/styles/pages/support.module.css"
import Image from "next/image";
import Grid from "@/components/Grid";
import Link from "next/link";
import Variants from "@/components/Popups/Variants";
import {useState} from "react";
import LeaveReaction from "@/components/Popups/LeaveReaction";

const Album = () => {

    const [visibleVariants, setVisibleVariants] = useState(false)
    const [visibleReact, setVisibleReact] = useState(false)

    const updateVisibleReact = (value) => {
        setVisibleReact(value)
    }

    const updateVisibleVariants = (value) => {
        setVisibleVariants(value)
    }

    const openVariants = () => {
        setVisibleVariants(true)
    }

    const openReaction = (e) => {
        e.stopPropagation()
        setVisibleReact(true)
    }

    return (
        <motion.div
            className={style_fb.pd + ' height'}
            style={{display: 'flex', flexDirection: 'column'}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <Variants visible={visibleVariants} setVisible={(value) => updateVisibleVariants(value)} />
            <LeaveReaction visible={visibleReact} setVisible={(value) => updateVisibleReact(value)} />
            <div className={style.info}>
                <Grid>
                    <div className={style.line + ' ' + style.small_line}>
                        <Image alt="preview" src={require("@/img/preview.png")} className={style.preview}/>
                        <div className={style.right}>
                            <div className={style.flex_line}>
                                <h1 className={style.name}>OVERHEAVEN (Synthware)</h1>
                                <p className={style.bpm}>170 bpm</p>
                            </div>
                            <div className={style.flex_line + ' ' + style.stars_mt + ' ' + style.small_line}>
                                <div>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.star}/>
                                    <Image alt="star" src={require("@/img/star.png")} className={style.star}/>
                                </div>
                                <p className={style.count}>12 452 623 реакций</p>
                            </div>
                            <div className={style.flex_line}>
                                <Link className={style.author} href="/">VisaGangBeatz</Link>
                            </div>
                            <div className={style.flex_line + ' ' + style.mt_auto}>
                                <motion.button
                                    className={style.variants}
                                    whileTap={{scale: 0.95}}
                                    onClick={openVariants}
                                >
                                    Посмотреть варианты
                                </motion.button>
                                <div className={style.message}>
                                    <svg className={style.svg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.1667 166.667C25.8334 166.667 22.9167 165.417 20.4167 162.917C17.9167 160.417 16.6667 157.5 16.6667 154.167V45.8333C16.6667 42.5 17.9167 39.5833 20.4167 37.0833C22.9167 34.5833 25.8334 33.3333 29.1667 33.3333H170.833C174.167 33.3333 177.083 34.5833 179.583 37.0833C182.083 39.5833 183.333 42.5 183.333 45.8333V154.167C183.333 157.5 182.083 160.417 179.583 162.917C177.083 165.417 174.167 166.667 170.833 166.667H29.1667ZM100 103.75L29.1667 57.2917V154.167H170.833V57.2917L100 103.75ZM100 91.25L170 45.8333H30.2084L100 91.25ZM29.1667 57.2917V45.8333V154.167V57.2917Z"/>
                                    </svg>
                                    <p className={style.message_text}>Написать продавцу</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
            <Grid>
                <div className={style.list}>
                    <div className={style.track_line}>
                        <p className={style.pos + ' ' + style.current}>1</p>
                        <h1 className={style.track_name}>OVERHEAVEN (Synthware)</h1>
                        <p onClick={(e) => openReaction(e)} className={style.reaction}>Оставить реакцию</p>
                        <p className={style.time}>1 : 41</p>
                    </div>
                </div>
            </Grid>
        </motion.div>
    );
};

export default Album;