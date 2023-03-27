import style_back from "@/styles/components/filters.module.css"
import style from "@/styles/components/reviews.module.css"
import {CSSTransition} from "react-transition-group";
import Image from "next/image";
import { motion } from "framer-motion";
import {useState} from "react";
import {LeftBlock, RightBlock} from "@/components/ReviewsLayouts/ViewReviews";

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

    const starCount = (stars) => {
        let i = 0;
        reviews.forEach(review => {
            if (review.stars === stars) i++;
        })
        return i
    }

    const closePopup = () => {
        setVisible(false)
    }

    return (
        <CSSTransition
            in={visible}
            timeout={580}
            classNames="filters-back"
            mountOnEnter
            unmountOnExit
        >
            <div className={style_back.back + ' filters-back'}>
                <div className={style.window}>
                    <LeftBlock stars={stars} reviews={reviews} />
                    <RightBlock stars={stars} _reverse={_reverse} starCount={starCount} closePopup={closePopup} />
                </div>
            </div>
        </CSSTransition>
    );
};

export default Reviews;