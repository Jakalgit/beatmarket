import style from "@/styles/components/player.module.css"
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Grid from "@/components/Grid";
import Image from "next/image";

const Player = () => {

    const [visible, setVisible] = useState(false)

    const [timeLine, setTimeLine] = useState('')

    const [timeMarginLeft, setTimeMarginLeft] = useState(40)

    const [volume, setVolume] = useState("50")

    const wrapperRef = useRef(null)
    const trackRef = useRef(null)
    const timeRef = useRef(null)
    const volLineRef = useRef(null)

    useEffect(() => {
        timeRef.current.style.marginLeft = timeMarginLeft + "px"
    }, [timeMarginLeft])

    useEffect(() => {
        volLineRef.current.style.width = volume + "%"
    }, [volume])

    const timeClick = (e) => {
        const x = e.pageX
        const width = wrapperRef.current.offsetWidth
        const trackW = (x * 100) / width
        trackRef.current.style.width = trackW + "%"
    }

    const viewTime = (e) => {
        const offset = 30
        const x = e.pageX
        const wrapperWidth = wrapperRef.current.offsetWidth
        if (x + offset <= wrapperWidth && x - offset >= 0) {
            setTimeMarginLeft(Math.abs((x - timeRef.current.offsetWidth / 2)))
        } else {
            if (x < offset) {
                setTimeMarginLeft(Math.abs((offset - timeRef.current.offsetWidth / 2)))
            }
            if (x > wrapperWidth - offset) {
                setTimeMarginLeft(Math.abs((wrapperWidth - offset - timeRef.current.offsetWidth / 2)))
            }
        }
        setTimeLine(x)
    }

    return (
        <>
            {visible &&
                <div className={style.block} />
            }
            <motion.div
                className={style.block + ' ' + style.player}
                initial={{opacity: 0, y: "10rem"}}
                animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : "10rem"
                }}
                transition={{
                    type: "spring",
                    layout: { duration: 0.4 },
                    bounce: 0,
                }}
            >
                <div
                    className={style.wrapper}
                    ref={wrapperRef}
                    onClick={(e) => timeClick(e)}
                    onMouseMove={(e) => viewTime(e)}
                >
                    <p ref={timeRef} className={style.currentTime}>{timeLine}</p>
                    <div
                        className={style.range}
                        ref={trackRef}
                    />
                </div>
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
                                <svg
                                    className={style.switch + ' ' + style.svg}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6.25 18C6.03333 18 5.85417 17.9292 5.7125 17.7875C5.57083 17.6458 5.5 17.4667 5.5 17.25V6.75C5.5 6.53333 5.57083 6.35417 5.7125 6.2125C5.85417 6.07083 6.03333 6 6.25 6C6.46667 6 6.64583 6.07083 6.7875 6.2125C6.92917 6.35417 7 6.53333 7 6.75V17.25C7 17.4667 6.92917 17.6458 6.7875 17.7875C6.64583 17.9292 6.46667 18 6.25 18ZM17.325 17.175L10.75 12.625C10.5167 12.475 10.4 12.2667 10.4 12C10.4 11.7333 10.5167 11.525 10.75 11.375L17.325 6.825C17.575 6.64167 17.8333 6.62083 18.1 6.7625C18.3667 6.90417 18.5 7.125 18.5 7.425V16.575C18.5 16.8583 18.3667 17.075 18.1 17.225C17.8333 17.375 17.575 17.3583 17.325 17.175Z" />
                                </svg>
                                <svg
                                    className={style.play + ' ' + style.svg}
                                    viewBox="0 0 45 45"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.1562 34.125C16.6875 34.4375 16.2109 34.4531 15.7266 34.1719C15.2422 33.8906 15 33.4688 15 32.9063V11.8125C15 11.25 15.2422 10.8281 15.7266 10.5469C16.2109 10.2656 16.6875 10.2813 17.1562 10.5938L33.75 21.1875C34.1875 21.4688 34.4062 21.8594 34.4062 22.3594C34.4062 22.8594 34.1875 23.25 33.75 23.5313L17.1562 34.125Z" />
                                </svg>
                                <svg
                                    className={style.switch + ' ' + style.svg}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.75 18C17.5333 18 17.3542 17.9292 17.2125 17.7875C17.0708 17.6458 17 17.4667 17 17.25V6.75C17 6.53333 17.0708 6.35417 17.2125 6.2125C17.3542 6.07083 17.5333 6 17.75 6C17.9667 6 18.1458 6.07083 18.2875 6.2125C18.4292 6.35417 18.5 6.53333 18.5 6.75V17.25C18.5 17.4667 18.4292 17.6458 18.2875 17.7875C18.1458 17.9292 17.9667 18 17.75 18ZM6.675 17.175C6.425 17.3583 6.16667 17.375 5.9 17.225C5.63333 17.075 5.5 16.8583 5.5 16.575V7.425C5.5 7.125 5.63333 6.90417 5.9 6.7625C6.16667 6.62083 6.425 6.64167 6.675 6.825L13.25 11.375C13.4833 11.525 13.6 11.7333 13.6 12C13.6 12.2667 13.4833 12.475 13.25 12.625L6.675 17.175Z" />
                                </svg>
                            </div>
                            <div className={style.part + ' ' + style.three}>
                                <svg
                                    className={style.sound}
                                    viewBox="0 0 28 28"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.5583 23.8292C17.2472 23.9264 16.9653 23.8778 16.7125 23.6833C16.4597 23.4889 16.3333 23.2264 16.3333 22.8958C16.3333 22.7403 16.3771 22.5993 16.4646 22.4729C16.5521 22.3465 16.6736 22.2639 16.8292 22.225C18.5986 21.6028 20.0278 20.5431 21.1167 19.0458C22.2056 17.5486 22.75 15.857 22.75 13.9708C22.75 12.0847 22.2056 10.3882 21.1167 8.88126C20.0278 7.37432 18.5986 6.31946 16.8292 5.71668C16.6736 5.67779 16.5521 5.59029 16.4646 5.45418C16.3771 5.31807 16.3333 5.17224 16.3333 5.01668C16.3333 4.68612 16.4646 4.42848 16.7271 4.24376C16.9896 4.05904 17.2667 4.01529 17.5583 4.11251C19.6389 4.8514 21.316 6.12015 22.5896 7.91876C23.8632 9.71737 24.5 11.7347 24.5 13.9708C24.5 16.207 23.8632 18.2243 22.5896 20.0229C21.316 21.8215 19.6389 23.0903 17.5583 23.8292ZM4.375 17.5C4.12222 17.5 3.91319 17.4174 3.74792 17.2521C3.58264 17.0868 3.5 16.8778 3.5 16.625V11.375C3.5 11.1222 3.58264 10.9132 3.74792 10.7479C3.91319 10.5827 4.12222 10.5 4.375 10.5H8.16667L12.5125 6.15418C12.7847 5.88196 13.1007 5.81876 13.4604 5.9646C13.8201 6.11043 14 6.37779 14 6.76668V21.2333C14 21.6222 13.8201 21.8896 13.4604 22.0354C13.1007 22.1813 12.7847 22.1181 12.5125 21.8458L8.16667 17.5H4.375ZM15.75 18.9V9.07085C16.8 9.4014 17.6458 10.0236 18.2875 10.9375C18.9292 11.8514 19.25 12.8722 19.25 14C19.25 15.1472 18.9292 16.1681 18.2875 17.0625C17.6458 17.957 16.8 18.5695 15.75 18.9Z" />
                                </svg>
                                <div className={style.volumeWrapper}>
                                    <div
                                        ref={volLineRef}
                                        className={style.volLine + ' ' + style.leftLine}
                                    />
                                    <input
                                        className={style.volume + ' ' + style.volLine}
                                        type="range"
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={volume}
                                        onChange={(e) => setVolume(e.target.value)}
                                    />
                                </div>
                                <svg
                                    className={style.sound + ' ' + style.download + ' ' + style.svg}
                                    viewBox="0 0 28 28"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.0001 18.5208C13.8834 18.5208 13.7765 18.5014 13.6792 18.4625C13.582 18.4236 13.4848 18.3555 13.3876 18.2583L8.98341 13.8542C8.80841 13.6792 8.72578 13.4701 8.7355 13.2271C8.74522 12.984 8.83758 12.775 9.01258 12.6C9.18758 12.425 9.39661 12.3375 9.63966 12.3375C9.88272 12.3375 10.0917 12.425 10.2667 12.6L13.1251 15.4875V5.54166C13.1251 5.28888 13.2077 5.07985 13.373 4.91457C13.5383 4.7493 13.7473 4.66666 14.0001 4.66666C14.2529 4.66666 14.4619 4.7493 14.6272 4.91457C14.7924 5.07985 14.8751 5.28888 14.8751 5.54166V15.4875L17.7626 12.6C17.9376 12.425 18.1466 12.3375 18.3897 12.3375C18.6327 12.3375 18.8417 12.425 19.0167 12.6C19.1917 12.775 19.2792 12.984 19.2792 13.2271C19.2792 13.4701 19.1917 13.6792 19.0167 13.8542L14.6126 18.2583C14.5154 18.3555 14.4181 18.4236 14.3209 18.4625C14.2237 18.5014 14.1167 18.5208 14.0001 18.5208ZM6.41675 23.3333C5.95008 23.3333 5.54175 23.1583 5.19175 22.8083C4.84175 22.4583 4.66675 22.05 4.66675 21.5833V18.2875C4.66675 18.0347 4.74939 17.8257 4.91466 17.6604C5.07994 17.4951 5.28897 17.4125 5.54175 17.4125C5.79453 17.4125 6.00355 17.4951 6.16883 17.6604C6.33411 17.8257 6.41675 18.0347 6.41675 18.2875V21.5833H21.5834V18.2875C21.5834 18.0347 21.6661 17.8257 21.8313 17.6604C21.9966 17.4951 22.2056 17.4125 22.4584 17.4125C22.7112 17.4125 22.9202 17.4951 23.0855 17.6604C23.2508 17.8257 23.3334 18.0347 23.3334 18.2875V21.5833C23.3334 22.05 23.1584 22.4583 22.8084 22.8083C22.4584 23.1583 22.0501 23.3333 21.5834 23.3333H6.41675Z" />
                                </svg>
                            </div>
                        </div>
                    </Grid>
                </div>
            </motion.div>
        </>
    );
};

export default Player;