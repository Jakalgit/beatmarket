import {CSSTransition} from "react-transition-group";
import style_back from "@/styles/components/filters.module.css"
import style from "@/styles/components/attention.module.css"

const Attention = ({visible, setVisible, setDelChat, currentChatId}) => {

    const deleteChat = () => {
        setDelChat(currentChatId)
        closePopup()
    }

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
                    <div className={style.center}>
                        <p className={style.text + ' ' + style.up}>Вы действительно хотите удалить чат?</p>
                        <div>
                            <p onClick={deleteChat}
                               className={style.text + ' ' + style.delete + ' ' + style.action}
                            >
                                Удалить
                            </p>
                            <p onClick={() => closePopup()}
                               className={style.text + ' ' + style.save + ' ' + style.action}
                            >
                                Оставить
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Attention;