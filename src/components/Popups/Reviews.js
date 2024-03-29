import style_back from "@/styles/components/filters.module.css"
import style from "@/styles/components/reviews.module.css"
import {CSSTransition} from "react-transition-group";
import {useState} from "react";
import {LeftBlockView, RightBlockView} from "@/components/ReviewsLayouts/ViewReviews";
import Image from "next/image";
import {LeftBlockWrite, RightBlockWrite} from "@/components/ReviewsLayouts/WriteReview";

const Reviews = ({visible, setVisible}) => {

    const stars = [1, 2, 3, 4, 5]
    const _reverse = [5, 4, 3, 2, 1]

    const [reviews, setReviews] = useState([
        {
            username: "GONE.Fludd",
            stars: 5,
            text: "Купил эксклюзивные права на бит, всё прошло отлично, быстро договорились и закрыли сделку."
        },
        {
            username: "PROOVY",
            stars: 4,
            text: "Купил эксклюзивные права на бит, всё прошло отлично, быстро договорились и закрыли сделку."
        },
        {
            username: "Рандомный чувак",
            stars: 3,
            text: "Купил эксклюзивные права на бит, всё прошло отлично, быстро договорились и закрыли сделку."
        },
        {
            username: "GONE.Fludd",
            stars: 5,
            text: "Купил эксклюзивные права на бит, всё прошло отлично, быстро договорились и закрыли сделку."
        },
        {
            username: "PROOVY",
            stars: 4,
            text: "Купил эксклюзивные права на бит, всё прошло отлично, быстро договорились и закрыли сделку."
        },
        {
            username: "Рандомный чувак",
            stars: 3,
            text: "Купил эксклюзивные права на бит, всё прошло отлично, быстро договорились и закрыли сделку."
        },
    ])

    const [reviewStars, setReviewStars] = useState(0)
    const [reviewText, setReviewText] = useState('')

    const [writeDisplay, setWriteDisplay] = useState('none')
    const [writeOpacity, setWriteOpacity] = useState(0)

    const [viewDisplay, setViewDisplay] = useState('flex')
    const [viewOpacity, setViewOpacity] = useState(1)

    const starCount = (stars) => {
        let i = 0;
        reviews.forEach(review => {
            if (review.stars === stars) i++;
        })
        return i
    }

    const openWriteMode = () => {
        setReviewStars(0)
        setReviewText('')
        setViewOpacity(0)
        setTimeout(() => {
            setViewDisplay('none')
            setWriteDisplay('flex')
            setTimeout(() => {
                setWriteOpacity(1)
            }, 200)
        }, 200)
    }

    const closeWriteMode = () => {
        setWriteOpacity(0)
        setTimeout(() => {
            setWriteDisplay('none')
            setViewDisplay('flex')
            setTimeout(() => {
                setViewOpacity(1)
            }, 200)
        }, 200)
    }

    const updateReviewStars = (value) => {
        setReviewStars(value)
    }

    const updateReviewText = (value) => [
        setReviewText(value)
    ]

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
                <div className={style.window}>
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
                            <svg onClick={closePopup} className={style_back.close + ' ' + style.cl_small} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                            </svg>
                        </div>
                        <LeftBlockView
                            display={viewDisplay}
                            opacity={viewOpacity}
                            stars={stars}
                            reviews={reviews}
                        />
                        <LeftBlockWrite
                            display={writeDisplay}
                            opacity={writeOpacity}
                            closeWriteMode={closeWriteMode}
                            reviewText={reviewText}
                            setReviewText={(value) => updateReviewText(value)}
                        />
                    </div>
                    <div className={style.border}/>
                    <div className={style.right + ' ' + style.block}>
                        <div className={style.line} style={{justifyContent: "flex-end"}}>
                            <svg onClick={closePopup} className={style_back.close + ' ' + style.cl_large} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                            </svg>
                        </div>
                        <RightBlockView
                            display={viewDisplay}
                            opacity={viewOpacity}
                            starCount={starCount}
                            stars={stars}
                            _reverse={_reverse}
                            openWriteMode={openWriteMode}
                        />
                        <RightBlockWrite
                            display={writeDisplay}
                            opacity={writeOpacity}
                            stars={stars}
                            reviewStars={reviewStars}
                            setReviewStars={(value) => updateReviewStars(value)}
                        />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Reviews;