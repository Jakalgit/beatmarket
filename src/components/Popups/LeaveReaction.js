import style from "@/styles/components/leave_reaction.module.css"
import style_back from "@/styles/components/filters.module.css"
import {CSSTransition} from "react-transition-group";
import Image from "next/image";
import {motion} from "framer-motion";

const LeaveReaction = ({visible, setVisible}) => {

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
                    <div className={style.line}>
                        <h1 className={style_back.head}>Ваша реакция важна для всех</h1>
                        <svg onClick={closePopup} className={style_back.close} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 17.4L9.00005 24.4C8.80005 24.6 8.56672 24.7 8.30005 24.7C8.03338 24.7 7.80005 24.6 7.60005 24.4C7.40005 24.2 7.30005 23.9667 7.30005 23.7C7.30005 23.4333 7.40005 23.2 7.60005 23L14.6 16L7.60005 9C7.40005 8.8 7.30005 8.56667 7.30005 8.3C7.30005 8.03334 7.40005 7.8 7.60005 7.6C7.80005 7.4 8.03338 7.3 8.30005 7.3C8.56672 7.3 8.80005 7.4 9.00005 7.6L16 14.6L23 7.6C23.2 7.4 23.4334 7.3 23.7 7.3C23.9667 7.3 24.2 7.4 24.4 7.6C24.6 7.8 24.7 8.03334 24.7 8.3C24.7 8.56667 24.6 8.8 24.4 9L17.4 16L24.4 23C24.6 23.2 24.7 23.4333 24.7 23.7C24.7 23.9667 24.6 24.2 24.4 24.4C24.2 24.6 23.9667 24.7 23.7 24.7C23.4334 24.7 23.2 24.6 23 24.4L16 17.4Z" fill="#82B1FF"/>
                        </svg>
                    </div>
                    <p className={style.text}>
                        Помогите создателю набрать популярность! Чем больше реакций, тем чаще другим
                        пользователям будет попадаться этот классный бит.
                    </p>
                    <div className={style.line + ' ' + style.stars}>
                        <Image alt="star" src={require("@/img/star.png")} className={style.star} />
                        <Image alt="star" src={require("@/img/star.png")} className={style.star} />
                        <Image alt="star" src={require("@/img/star.png")} className={style.star} />
                        <Image alt="star" src={require("@/img/star.png")} className={style.star} />
                        <Image alt="star" src={require("@/img/star.png")} className={style.star} />
                    </div>
                    <motion.button
                        whileTap={{scale: 0.95}}
                        className={style.button}
                    >
                        Оставить реакцию
                    </motion.button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default LeaveReaction;