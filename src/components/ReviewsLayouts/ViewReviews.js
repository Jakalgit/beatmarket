import style from "@/styles/components/reviews.module.css";
import Image from "next/image";
import {motion} from "framer-motion";

export const LeftBlockView = ({display, opacity, reviews, stars}) => {
    return (
        <>
            {display !== 'none' &&
                <div className={style.list + ' ' + style.scl}  style={{opacity}}>
                    {reviews.map(review =>
                        <motion.div
                            className={style.review + ' ' + (reviews.indexOf(review) !== reviews.length - 1 ? style.review_border : '')}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                        >
                            <div className={style.review_info}>
                                <Image alt="photo" src="" className={style.user_photo}/>
                                <div className={style.name_date}>
                                    <h2 className={style.name}>{review.username}</h2>
                                    <p className={style.date}>26 марта 2023</p>
                                </div>
                                <div className={style.review_stars}>
                                    {stars.map(i => {
                                        if (i <= review.stars) {
                                            return <Image alt="star" src={require("@/img/star.png")} className={style.review_star}/>
                                        } else {
                                            return <Image alt="star" src={require("@/img/star_shadow.png")} className={style.review_star}/>
                                        }
                                    })}
                                </div>
                            </div>
                            <p className={style.comment}>{review.text}</p>
                        </motion.div>
                    )}
                </div>
            }
        </>
    );
};

export const RightBlockView = ({display, opacity, _reverse, stars, starCount, openWriteMode}) => {
    return (
        <>
            {display !== 'none' &&
                <>
                    <div className={style.rate_list} style={{opacity}}>
                        {_reverse.map(ct =>
                            <div className={style.rate_line}>
                                {stars.map(i => {
                                    if (i <= ct) {
                                        return <Image alt="star" src={require("@/img/star.png")} className={style.review_star}/>
                                    } else {
                                        return <Image alt="star" src={require("@/img/star_shadow.png")} className={style.review_star}/>
                                    }
                                })}
                                <p className={style.count_rate}>{starCount(ct)}</p>
                            </div>
                        )}
                    </div>
                    <motion.button
                        style={{opacity}}
                        className={style.button}
                        whileTap={{ scale: 0.97 }}
                        onClick={openWriteMode}
                    >
                        Оставить отзыв
                    </motion.button>
                </>
            }
        </>
    )
}