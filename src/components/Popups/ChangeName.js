import {CSSTransition} from "react-transition-group";
import style_back from "@/styles/components/filters.module.css";

const ChangeName = ({visible, setVisible}) => {
    return (
        <CSSTransition
            in={visible}
            timeout={580}
            classNames="popup-back"
            mountOnEnter
            unmountOnExit
        >
            <div className={style_back.back + ' popup-back'}>

            </div>
        </CSSTransition>
    );
};

export default ChangeName;