import style from "@/styles/components/variants.module.css"
import style_back from "@/styles/components/filters.module.css"
import style_window from "@/styles/components/reviews.module.css"
import {CSSTransition} from "react-transition-group";
import Image from "next/image";
import {useState} from "react";
import {motion} from "framer-motion";

const Variants = ({visible, setVisible}) => {

    const variants = [
        {
            id: 1,
            name: "Безлимитная аренда (MP3 + WAV + TrackOut)"
        },
        {
            id: 2,
            name: "Аренда (MP3)"
        },
        {
            id: 3,
            name: "Аренда (MP3)"
        },
        {
            id: 4,
            name: "Аренда (MP3)"
        }
    ]

    const [currentVariant, setCurrentVariant] = useState(-1)

    const closePopup = () => {
        setVisible(false)
    }

    return (
        <CSSTransition
            in={visible}
            timeout={580}
            classNames="popup-back"
            mountOnEnter
            unmountOnExit
        >
            <div className={style_back.back + ' popup-back'}>
                <div className={style_window.window}>
                    <div className={style.left}>
                        <div className={style.track}>
                            <Image alt="preview" src={require("@/img/preview.png")} className={style.preview} />
                            <div className={style.track_info}>
                                <div className={style.name}>
                                    OVERHEAVEN (Synthwave)
                                    <svg onClick={closePopup}
                                         className={style_back.close + ' ' + style_window.cl_small + ' ' + style.ml_auto}
                                         viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                                    </svg>
                                </div>
                                <p className={style.bpm}>170 bpm</p>
                                <p className={style.price}>8 000 ₽</p>
                            </div>
                        </div>
                        <div className={style.list}>
                            {variants.map(el =>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                    className={style.variant + ' ' + (currentVariant === el.id ? style.current : '')}
                                    onClick={() => setCurrentVariant(el.id)}
                                >
                                    <div className={style.round + ' ' + (currentVariant === el.id ? style.current : '')}>
                                        <svg className={style.check}
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 96 960 960"
                                             style={{opacity: (currentVariant === el.id ? 1 : 0)}}
                                        >
                                            <path d="M378 815q-9 0-17.5-3.5T345 801L164 620q-14-14-14-34t14-34q14-14 33.5-14t34.5 14l146 146 350-349q14-14 33.5-14.5T795 349q14 14 14 34t-14 34L411 801q-7 7-15.5 10.5T378 815Z"/>
                                        </svg>
                                    </div>
                                    <p className={style.var_name + ' ' + (currentVariant === el.id ? style.current_name : '')}>
                                        {el.name}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <div className={style.separate}/>
                    <div className={style.right}>
                        <div className={style.close_line + ' ' + style.none}>
                            <svg onClick={closePopup} className={style_back.close + ' ' + style_window.cl_large} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                            </svg>
                        </div>
                        <div className={style.column}>
                            <div className={style.message}>
                                <svg className={style.svg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.1667 166.667C25.8334 166.667 22.9167 165.417 20.4167 162.917C17.9167 160.417 16.6667 157.5 16.6667 154.167V45.8333C16.6667 42.5 17.9167 39.5833 20.4167 37.0833C22.9167 34.5833 25.8334 33.3333 29.1667 33.3333H170.833C174.167 33.3333 177.083 34.5833 179.583 37.0833C182.083 39.5833 183.333 42.5 183.333 45.8333V154.167C183.333 157.5 182.083 160.417 179.583 162.917C177.083 165.417 174.167 166.667 170.833 166.667H29.1667ZM100 103.75L29.1667 57.2917V154.167H170.833V57.2917L100 103.75ZM100 91.25L170 45.8333H30.2084L100 91.25ZM29.1667 57.2917V45.8333V154.167V57.2917Z"/>
                                </svg>
                                <p className={style.write_text}>Написать продавцу</p>
                            </div>
                            <motion.button
                                className={style.button}
                                whileTap={{scale: 0.95}}
                            >
                                Перейти к оформлению
                            </motion.button>
                        </div>
                        <div className={style.column}>
                            <div className={style.conditions}>
                                {[1, 1, 1].map(() =>
                                    <>
                                        <motion.div
                                            className={style.condition}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: false }}
                                        >
                                            <div className={style.dot}/>
                                            <div className={style.cond_text}>
                                                Вы получаете инструментал в форматах mp3, WAV и раскладку по дорожкам высокого качества без защитных звуковых тэгов.
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className={style.condition}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: false }}
                                        >
                                            <div className={style.dot}/>
                                            <div className={style.cond_text}>
                                                Количество прослушиваний и срок лицензии: не ограничено.
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className={style.condition}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: false }}
                                        >
                                            <div className={style.dot}/>
                                            <div className={style.cond_text}>
                                                Инструментал остается в продаже до покупки эксклюзивных прав. Кто выкупает полностью бит, подписывает договор что не может препятствовать распространению треков, взятых в аренду. Поэтому можете не переживать, треки на арендованные биты остаются у вас, и ни кто их не заблокирует.
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                            <p className={style.note}>
                                Dы можете договориться с продавцом о подписи констракта.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Variants;