import style from "@/styles/components/reviews.module.css"
import {motion} from "framer-motion";
import Image from "next/image";

export const LeftBlockWrite = ({reviewText, setReviewText, closeWriteMode, display, opacity}) => {
    return (
        <>
            {display !== 'none' &&
                <div className={style.left_write} style={{opacity}}>
                    <div>
                        <div className={style.write_text_line}>
                            <h2 className={style.write_text}>Комментарий к отзыву</h2>
                            <svg onClick={closeWriteMode} className={style.back_view} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                                <path d="m333.478 798.783-197-196q-6.13-6.131-8.978-13.109T124.652 575q0-7.696 2.848-14.674t8.978-13.109l197-197q10.826-10.826 27.783-11.326t28.783 11.326q11.826 11.826 11.826 28.283t-11.826 28.283L261.436 535.391h550.825q16.957 0 28.283 11.326T851.87 575q0 16.957-11.326 28.283t-28.283 11.326H261.436l128.608 128.608q10.826 10.826 11.044 27.283.217 16.457-11.044 28.283-11.826 11.826-28.283 11.826t-28.283-11.826Z"/>
                            </svg>
                        </div>
                    </div>
                    <textarea
                        placeholder="Введите текст..."
                        className={style.textarea + ' ' + style.scl}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    >
                    </textarea>
                </div>
            }
        </>
    );
};

export const RightBlockWrite = ({display, opacity, stars, reviewStars, setReviewStars, openWriteMode}) => {
    return (
        <>
            {display !== 'none' &&
                <>
                    <div className={style.set_stars} style={{opacity}}>
                        <p className={style.set_text}>Выберите оценку</p>
                        <div>
                            {stars.map(i => {
                                if (i <= reviewStars) {
                                    return (
                                        <Image
                                            onClick={() => setReviewStars(i)}
                                            alt="star"
                                            src={require("@/img/star.png")}
                                            className={style.set_star}
                                        />
                                    )
                                } else {
                                    return (
                                        <Image
                                            onClick={() => setReviewStars(i)}
                                            alt="star"
                                            src={require("@/img/star_shadow.png")}
                                            className={style.set_star}
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <motion.button
                        style={{opacity}}
                        className={style.button}
                        whileTap={{ scale: 0.97 }}
                    >
                        Отправить
                    </motion.button>
                </>
            }
        </>
    )
}