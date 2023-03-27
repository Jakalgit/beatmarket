import style from "@/styles/components/reviews.module.css";
import Image from "next/image";
import {motion} from "framer-motion";
import style_back from "@/styles/components/filters.module.css";

export const LeftBlock = ({reviews, stars}) => {
    return (
        <div className={style.left + ' ' + style.block}>
            <div className={style.line}>
                <div className={style.line + ' ' + style.rating}>
                    <p className={style.score}>4,9</p>
                    <div className={style.stars}>
                        <div>
                            <Image alt="image" src={require("@/img/star.png")} className={style.star}/>
                            <Image alt="image" src={require("@/img/star.png")} className={style.star}/>
                            <Image alt="image" src={require("@/img/star.png")} className={style.star}/>
                            <Image alt="image" src={require("@/img/star.png")} className={style.star}/>
                            <Image alt="image" src={require("@/img/star.png")} className={style.star}/>
                        </div>
                        <p className={style.score_text}>на основании 12 отзывов</p>
                    </div>
                </div>
                <h1 className={style.creator_name}>CAKE BUY BEATS</h1>
            </div>
            <div className={style.list}>
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
        </div>
    );
};

export const RightBlock = ({_reverse, stars, closePopup, starCount}) => {
    return (
        <div className={style.right + ' ' + style.block}>
            <div className={style.line} style={{justifyContent: "flex-end"}}>
                <svg onClick={closePopup} className={style_back.close} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                </svg>
            </div>
            <div className={style.rate_list}>
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
            <motion.button className={style.button} whileTap={{ scale: 0.97 }}>
                Оставить отзыв
            </motion.button>
        </div>
    )
}